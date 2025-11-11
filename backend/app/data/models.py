from pydantic import BaseModel, HttpUrl
from typing import Optional

class Project(BaseModel):
    id: int
    title: str
    description: str
    imageUrl: Optional[HttpUrl] = None
    url: Optional[HttpUrl] = None
    tags: list[str]
    featured: bool

class Skills(BaseModel):
    title: str
    category: str
    icon_url: Optional[str] = None

class Experiences(BaseModel):
    title: str
    description: str
    timeframe: str
    location: str

class Diplomas(BaseModel):
    title: str
    description: str
    category: str

class BlogPost(BaseModel):
    id: int
    title: str
    content: str
    date: str
    url: Optional[HttpUrl] = None