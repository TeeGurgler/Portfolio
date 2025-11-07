from pydantic import BaseModel, HttpUrl
from typing import Optional


class Project(BaseModel):
    id: int
    title: str
    description: str
    imageUrl: Optional[HttpUrl] = None
    url: Optional[HttpUrl] = None
    tags: list[str] = []
    featured: bool = False

class Skills(BaseModel):
    title: str
    description: str

class Experiences(BaseModel):
    title: str
    description: str
    timeframe: str
    location: str

class Diplomas(BaseModel):
    title: str
    description: str
