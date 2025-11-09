# Portfolio Website

A modern, full-stack portfolio web application built with FastAPI (Python) and React (TypeScript).

## 🚀 Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite
- TailwindCSS
- React Router

**Backend:**
- FastAPI (Python)
- Pydantic models
- Uvicorn

**DevOps:**
- Docker & Docker Compose
- Hot-reload for development

## 📦 Project Structure

```
Portfolio/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── types.ts
│   └── Dockerfile
├── backend/           # FastAPI application
│   ├── app/
│   │   ├── data/      # API routes & data store
│   │   ├── models.py  # Pydantic models
│   │   └── main.py    # App entry point
│   └── Dockerfile
└── docker-compose.yml
```

## 🏃 Quick Start

**Prerequisites:** Docker & Docker Compose installed

1. **Clone the repo:**
   ```bash
   git clone https://github.com/TeeGurgler/Portfolio.git
   cd Portfolio
   ```

2. **Start with Docker:**
   ```bash
   docker-compose up
   ```

3. **Access:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API docs: http://localhost:8000/docs

## 📝 API Endpoints

- `GET /api/projects` - List all projects
- `GET /api/skills` - List all skills
- `GET /api/experiences` - List all experiences
- `GET /api/diplomas` - List all diplomas
- `GET /api/health` - Health check

## 🛠️ Development

**Add new projects:** Edit `backend/app/data/store.py`

**Modify frontend:** Changes in `frontend/src/` auto-reload

**Hot-reload enabled** for both frontend and backend.

## 📄 License

MIT

---

Built with ❤️ by Andrés Jauch