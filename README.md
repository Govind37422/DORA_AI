# DORA AI

<div align="center">

![DORA AI](https://img.shields.io/badge/DORA-AI%20Builder-6366f1?style=for-the-badge&logo=github&logoColor=white)
![Status](https://img.shields.io/badge/status-beta-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Describe what you want. DORA AI generates a complete, production-ready website in seconds.**

[📖 Features](#-features) · [🚀 Quick Start](#-quick-start) · [💻 Setup](#-setup)

</div>

---

## ✨ Features

- 🎨 **AI-Powered Generation** — Describe your website in plain English and get a complete, polished single-file HTML site instantly.
- 📱 **Fully Responsive** — Every generated site adapts beautifully to mobile, tablet, and desktop.
- 🚀 **Fast & Modern Stack** — Built with FastAPI + React + Vite + Tailwind CSS for a snappy development experience.
- 🔌 **Provider Switching** — Choose between [Groq](https://groq.com) and [OpenRouter](https://openrouter.ai) via a single environment variable.
- 🎯 **Clean Output** — Single self-contained HTML file with embedded CSS/JS, no external dependencies required.
- 🌐 **Easy Deployment** — Deploy anywhere: Vercel, Netlify, GitHub Pages, or any static host.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Python 3.11, [FastAPI](https://fastapi.tiangolo.com), [Uvicorn](https://www.uvicorn.org) |
| **AI Providers** | [Groq API](https://groq.com), [OpenRouter](https://openrouter.ai) |
| **Frontend** | React 18, [Vite](https://vite.dev), [Tailwind CSS](https://tailwindcss.com) |
| **Package Managers** | `pip`, `npm` |
| **Deployment** | Vercel / Netlify / GitHub Pages / Docker |

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Groq](https://img.shields.io/badge/Groq-166534?style=for-the-badge&logo=openai&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-000000?style=for-the-badge&logo=openai&logoColor=white)

</div>

---

## 📋 Project Overview

DORA AI is an **AI-powered website builder** that transforms natural language descriptions into complete, responsive websites. It combines the speed of Groq's inference with the flexibility of OpenRouter's model marketplace, delivering production-grade HTML, CSS, and JS in a single response.

Whether you're building a landing page, portfolio, dashboard, or marketing site — just describe it, and DORA AI generates the entire frontend for you.

---

## 🚀 Quick Start

Get DORA AI running in under 5 minutes.

### 1. Clone the repository

```bash
git clone https://github.com/Govind37422/DORA_AI.git
cd DORA_AI
```

### 2. Start the backend

```bash
cd backend
cp .env.example .env
# Edit .env and add your API key (Groq or OpenRouter)
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at: **http://localhost:8000**

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: **http://localhost:5173**

> 🎉 The app now connects to http://localhost:8000. Start describing websites!

---

## 💻 Setup Guide

### Backend (FastAPI)

1. Navigate to the `backend/` directory.
2. Copy the example environment file: `cp .env.example .env`.
3. Add your API key (see [Environment Variables](#-environment-variables)).
4. Install dependencies: `pip install -r requirements.txt`.
5. Launch the server: `uvicorn main:app --reload`.

### Frontend (React + Vite)

1. Navigate to the `frontend/` directory.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`.

### Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```env
# AI Provider API Key (Groq or OpenRouter)
OPENAI_API_KEY=your_api_key_here

# Provider selection: "groq" or "openrouter"
PROVIDER=groq
```

**Groq** is recommended for its generous free tier and ultra-low latency. Switch to **OpenRouter** if you want access to a wider variety of models.

---

## 📁 Folder Structure

```
dora-ai/
│
├── backend/                    # FastAPI REST API
│   ├── main.py                 # API server & AI generation endpoint
│   ├── requirements.txt        # Python dependencies
│   ├── .env.example            # Environment variable template
│   └── .env                    # Your secrets (git-ignored)
│
├── frontend/                   # React + Vite + Tailwind UI
│   ├── src/
│   │   ├── App.jsx             # App router & layout
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Editor.jsx
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # React entry point
│   ├── index.html              # HTML template
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── postcss.config.js       # PostCSS configuration
│   ├── package.json
│   └── node_modules/           # (git-ignored)
│
├── .vscode/                    # VS Code workspace settings
├── .gitignore                  # Ignored files & secrets
├── DORA-AI-Landing.html        # Standalone marketing landing page
├── PRD.md                      # Product Requirements Document
├── QA-TESTS.md                 # Test cases & QA checklist
├── sample-website.html         # Sample generated output
├── dora-ai.code-workspace      # VS Code workspace file
└── README.md                   # This file
```

> 🔒 `.env`, `node_modules/`, `__pycache__/`, and build outputs are excluded from version control.

---

## 🌟 Screenshots

*Add screenshots of your running app to the `docs/` or `public/` folder and reference them here.*

---

## 📄 Documentation

| Document | Description |
|---|---|
| [PRD.md](PRD.md) | Product requirements, scope & feature roadmap |
| [QA-TESTS.md](QA-TESTS.md) | Test cases & quality assurance checklist |
| [DORA-AI-Landing.html](DORA-AI-Landing.html) | Professional landing page (standalone) |
| [sample-website.html](sample-website.html) | Sample AI-generated website |

---

## 👥 Roles & Responsibilities

This project was built as a complete full-stack product with all roles covered:

| Role | Deliverables |
|---|---|
| **Product Manager** | Project plan, scope definition, feature roadmap (PRD) |
| **UI/UX Designer** | Landing page, editor interface, design system |
| **Frontend Engineer** | React components, Tailwind styling, state management |
| **Backend Engineer** | FastAPI server, AI integration, API endpoints |
| **QA / Test Engineer** | Test cases, validation & QA checklist (QA-TESTS.md) |
| **DevOps** | Deployment guides, environment setup, CI/CD readiness |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it for personal and commercial projects.

---

<div align="center">

**Built with ❤️ by Govind Yadav**

Made with Groq/OpenRouter + FastAPI + React + Tailwind CSS

[Report a bug](https://github.com/Govind37422/DORA_AI/issues) · [Request a feature](https://github.com/Govind37422/DORA_AI/issues)

</div>
