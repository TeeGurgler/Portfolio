from .models import Project

# Simple in-memory store - REPLACE WITH YOUR PROJECTS
PROJECTS: list[Project] = [
    Project(
        id=1,
        title="My Awesome Project",
        description="A detailed and engaging description of what this project is, the problem it solves, and the tech I used.",
        imageUrl="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a", # Example image
        url="https://github.com/your-username/your-project-repo",
        tags=["python", "fastapi", "react", "docker"],
        featured=True,
    ),
    Project(
        id=2,
        title="Another Cool Thing I Built",
        description="This project showcases my skills in data analysis and visualization. It was built using...",
        imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", # Example image
        tags=["jupyter", "pandas", "matplotlib"],
        featured=False,
    ),
    # Add more projects here...
    # Project(id=3, title="...", ...),
]