from fastapi import FastAPI
from .Services.fetch_projects import *
from .data.api import router as api_router

app = FastAPI()

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