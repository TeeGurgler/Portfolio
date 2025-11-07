from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .Services.fetch_projects import *
from .data.api import router as api_router

app = FastAPI()

# Configure CORS to allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the API router which contains /api/projects and other endpoints
app.include_router(api_router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

@app.get("/all")
async def projects():
    return {f"message: {get_projects()}"}