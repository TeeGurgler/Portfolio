from fastapi import APIRouter, HTTPException
from .store import PROJECTS, SKILLS, EXPERIENCES, DIPLOMAS # Alle Datenlisten importieren
from .models import Project, Skills, Experiences, Diplomas     # Alle Modelle importieren


# Dies erstellt den Router mit dem /api Präfix
router = APIRouter(prefix="/api", tags=["api"])

# Endpunkt, um den Status der API zu prüfen
@router.get("/health")
async def health():
    return {"status": "ok"}

# Endpunkt, um die Liste der Projekte zurückzugeben
@router.get("/projects", response_model=list[Project])
async def list_projects():
    return PROJECTS

# Endpunkt, um die Liste der Skills zurückzugeben
@router.get("/skills", response_model=list[Skills])
async def list_skills():
    return SKILLS

# Endpunkt, um die Liste der Erfahrungen zurückzugeben
@router.get("/experiences", response_model=list[Experiences])
async def list_experience():
    return EXPERIENCES

# Endpunkt, um die Liste der Diplome zurückzugeben
@router.get("/diplomas", response_model=list[Diplomas])
async def list_diplomas():
    return DIPLOMAS