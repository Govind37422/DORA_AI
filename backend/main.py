import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = FastAPI(title="DORA AI — Website Generator")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Provider selection: "openrouter" or "groq"
PROVIDER = os.getenv("PROVIDER", "groq")

if PROVIDER == "groq":
    # Groq has a generous free tier
    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
        base_url="https://api.groq.com/openai/v1"
    )
    DEFAULT_MODEL = "openai/gpt-4o"
elif PROVIDER == "openrouter":
    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
        base_url="https://openrouter.ai/api/v1"
    )
    DEFAULT_MODEL = "openai/gpt-4o"
else:
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    DEFAULT_MODEL = "gpt-4o"

class GenerateRequest(BaseModel):
    prompt: str

class GenerateResponse(BaseModel):
    html: str
    css: str
    js: str | None = None
    description: str | None = None

@app.get("/")
def root():
    return {"status": "DORA AI is running", "version": "0.1.0", "provider": PROVIDER, "model": DEFAULT_MODEL}

@app.post("/generate", response_model=GenerateResponse)
def generate_website(req: GenerateRequest):
    if not req.prompt.strip():
        raise HTTPException(status_code=400, detail="Prompt cannot be empty")

    system_prompt = (
        "You are DORA AI, an expert web developer. Generate a complete, "
        "single-file HTML website based on the user's description. "
        "Return ONLY a JSON object with these exact keys: html, css, js (optional), description (optional). "
        "The html must contain a valid <!DOCTYPE html> with embedded CSS and JS. "
        "Make it visually modern, responsive, and production-ready. "
        "Do NOT include markdown code blocks (```html ... ```). Return only the JSON."
    )

    try:
        response = client.chat.completions.create(
            model=DEFAULT_MODEL,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": req.prompt}
            ],
            temperature=0.7,
            max_tokens=4096
        )

        raw = response.choices[0].message.content.strip()

        # Try to parse JSON
        try:
            import json
            # Strip markdown code blocks if present
            if raw.startswith("```"):
                raw = raw.split("```")[1].strip()
                if raw.startswith("json"):
                    raw = raw[4:]
                if raw.endswith("```"):
                    raw = raw[:-3]
            data = json.loads(raw)
        except Exception:
            data = {"html": raw, "css": "", "js": None}

        return GenerateResponse(
            html=data.get("html", ""),
            css=data.get("css", ""),
            js=data.get("js"),
            description=data.get("description")
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Generation failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
