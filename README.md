# DORA AI

**Build websites with AI.** Describe what you want, DORA AI generates a complete website.

## Quick Start

### 1. Get your OpenAI API Key
- Go to [platform.openai.com](https://platform.openai.com/api-keys)
- Create a new API key

### 2. Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env and paste your OpenAI API key
pip install -r requirements.txt
python main.py
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

The app runs at `http://localhost:3000` (frontend) and `http://localhost:8000` (backend API).

## Project Structure
```
dora-ai/
├── backend/          # FastAPI server
│   ├── main.py       # API endpoints
│   ├── requirements.txt
│   └── .env.example
├── frontend/         # React + Tailwind UI
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Editor.jsx
│   │   └── index.css
│   ├── public/
│   └── package.json
└── README.md
```

## Roles in This Project
| Role | Deliverable |
|---|---|
| Product Manager | Project plan, scope, features |
| UI/UX Designer | Landing page, editor interface |
| Frontend Engineer | React components, Tailwind styling |
| Backend Engineer | FastAPI server, OpenAI integration |
| QA/Test Engineer | Test cases, validation |
| DevOps | Deployment guide, CI/CD setup |
