# DORA AI — Product Requirements Document

## Product: DORA AI
**Type:** AI-powered website generator  
**Version:** 0.1.0 (Tech Demo)  
**Author:** Rahul Yadav

## Problem Statement
Users want to create websites but lack coding skills or time. DORA AI lets them describe what they want in plain English and generates a complete, functional website.

## Target User
- Beginners who want a website fast
- Entrepreneurs testing ideas
- Small business owners

## Core Features (MVP)
1. **Prompt-to-Site**: User types a description → AI generates full HTML website
2. **Live Preview**: Generated site renders in an iframe
3. **Download**: Export as HTML file
4. **Example Prompts**: Quick-start templates

## Product Roadmap
| Phase | Features | Timeline |
|---|---|---|
| **Demo** | Single page generation, basic preview | Now |
| **v1.0** | Multi-page, templates, editing | Next |
| **v2.0** | Hosting, domain, collaboration | Future |

## Tech Stack
- **Frontend:** React + Tailwind CSS
- **Backend:** Python FastAPI
- **AI:** OpenAI GPT-4o
- **Hosting:** Vercel (frontend) + Railway/Render (backend)

## Roles Required
- Product Manager
- UI/UX Designer
- Frontend Engineer
- Backend Engineer
- QA/Test Engineer
- DevOps Engineer

## Success Metrics
- Time from prompt to generated site: < 10 seconds
- Website passes basic Lighthouse accessibility checks
- User can download and run the generated HTML standalone
