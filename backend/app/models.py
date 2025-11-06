from pydantic import BaseModel, HttpUrl
from typing import Optional


class Project(BaseModel):
    id: int
    title: str
    description: str
    imageUrl: Optional[HttpUrl] = None  # <-- ADD THIS LINE
    url: Optional[HttpUrl] = None
    tags: list[str] = []
    featured: bool = False

