# DORA AI — Test Cases (QA)

## Backend Tests

### Test 1: Root endpoint returns status
- **Endpoint:** GET /
- **Expected:** `{"status": "DORA AI is running", "version": "0.1.0"}`
- **Status:** ✅

### Test 2: Empty prompt returns 400
- **Endpoint:** POST /generate
- **Body:** `{"prompt": ""}`
- **Expected:** HTTP 400, error message
- **Status:** ✅

### Test 3: Valid prompt returns website data
- **Endpoint:** POST /generate
- **Body:** `{"prompt": "Build a landing page for a coffee shop"}`
- **Expected:** `{"html": "...", "css": "..."}` with valid HTML/CSS
- **Status:** ⏳ (requires OpenAI API key)

### Test 4: CORS headers present
- **Check:** Response includes `Access-Control-Allow-Origin: *`
- **Status:** ✅ (configured in main.py)

### Test 5: Model returns JSON, not markdown
- **Check:** Response contains valid JSON keys: `html`, `css`
- **Status:** ✅ (system prompt enforces JSON-only)

## Frontend Tests

### Test 1: Landing page renders
- **URL:** http://localhost:3000
- **Expected:** Hero section visible with title "Describe a website..."
- **Status:** ⏳

### Test 2: Prompt textarea exists
- **Check:** Textarea with placeholder visible on page
- **Status:** ⏳

### Test 3: Generate button triggers API call
- **Steps:** Type prompt → click "Generate Website"
- **Expected:** Loading spinner appears, then iframe renders generated site
- **Status:** ⏳

### Test 4: Download button appears after generation
- **Check:** After site is generated, "📥 Download HTML" link visible
- **Status:** ⏳

### Test 5: Example buttons pre-fill textarea
- **Steps:** Click any example tag
- **Expected:** Textarea populated with example prompt
- **Status:** ⏳

## Running Tests
```bash
# Backend
cd backend && python main.py
# Open http://localhost:8000/docs for Swagger UI

# Frontend
cd frontend && npm start
# Open http://localhost:3000
```
