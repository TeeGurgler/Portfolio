from .models import *

PROJECTS: list[Project] = [
    Project(
        id=1,
        title="Container Tracking",
        description="Dieses Projekt ist eine umfassende Python-Anwendung zur Erstellung und Visualisierung von Routen-Karten",
        imageUrl=HttpUrl("https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"), # Example image
        url=HttpUrl("https://github.com/your-username/your-project-repo"),
        tags=["python", "fastapi", "react", "docker"],
        featured=True,
    ),
    Project(
        id=2,
        title="Demographische Datenanalyse",
        description="Analyse der Schweizer Strukturerhebungsdaten mit einem Fokus auf Migrationsmuster.",
        imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", # Example image
        tags=["R"],
        featured=False,
    ),
    Project(
        id=3,
        title="Tennis Tracking",
        description="Video basierte Tennis-Analyse.",
        imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",  # Example image
        tags=["Python"],
        featured=False
    )]

SKILLS: list[Skills] = [
    Skills(
        title="Python",
        description="x",
    ),
    Skills(
        title="R",
        description="x",
    ),
    Skills(
        title="React",
        description="x",
    ),
    Skills(
        title="Docker",
        description="x",
    ),
    Skills(
        title="FastAPI",
        description="x",
    ),
    Skills(title="SQL",
           description="x"),

    Skills(title="Tailwind",description="x"),

    Skills(title="Git & Github",description="x")
]
EXPERIENCES: list[Experiences] = [
    Experiences(
        title="Primarschule",
        description="x",
        timeframe="1234-4235",
        location="x",
    ),
    Experiences(
        title="Sekundarschule",
        description="x",
        timeframe="1234-4235",
        location="x"
    ),
    Experiences(
        title="Grundausbildung",
        description="x",
        timeframe="1234-4235",
        location="x"
    ),
    Experiences(
        title="FHNW",
        description="Data-Science Studium",
        location="Brugg",
        timeframe="1234-4235"
    )]

DIPLOMAS: list[Diplomas] = [
    Diplomas(
        title="",
        description="x"
    )
]
