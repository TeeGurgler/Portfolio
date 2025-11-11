from fastapi import APIRouter, HTTPException
from .store import PROJECTS, SKILLS, EXPERIENCES, DIPLOMAS, BLOG_POSTS
from .models import Project, Skills, Experiences, Diplomas, BlogPost

router = APIRouter(prefix="/api", tags=["api"])

@router.get("/health")
async def health():
    return {"status": "ok"}

@router.get("/projects", response_model=list[Project])
async def list_projects():
    return PROJECTS

@router.get("/skills", response_model=list[Skills])
async def list_skills():
    return SKILLS

@router.get("/experiences", response_model=list[Experiences])
async def list_experience():
    return EXPERIENCES

@router.get("/diplomas", response_model=list[Diplomas])
async def list_diplomas():
    return DIPLOMAS

@router.get("/blog", response_model=list[BlogPost])
async def list_blog_posts():
    return BLOG_POSTS