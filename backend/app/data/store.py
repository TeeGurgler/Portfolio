from .models import *

PROJECTS: list[Project] = [
    Project(
        id=1,
        title="Container Tracking",
        description="Dieses Projekt ist eine umfassende Python-Anwendung zur Erstellung und Visualisierung von Routen-Karten",
        imageUrl=HttpUrl("https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"), # Example image
        url=HttpUrl("https://github.com/NotSchebs/Cde1-1Da_Challenge_FHNW"),
        tags=["Python"],
        featured=True,
    ),
    Project(
        id=2,
        title="Demografische Datenanalyse",
        description="Analyse der Schweizer Strukturerhebungsdaten mit einem Fokus auf Migrationsmuster.",
        url=HttpUrl("https://github.com/TeeGurgler/CDE1-Demografie"), # Example image
        tags=["R"],
        featured=False,
    ),
    Project(
        id=3,
        title="Tennis Tracking",
        description="Video basierte Tennis-Analyse.",
        imageUrl=HttpUrl("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"),
        tags=["Python", "ZED SDK"],
        featured=False
    )]

SKILLS: list[Skills] = [
    Skills(
        title="Python",
        category="Sprachen",
    ),
    Skills(
        title="R",
        category="Sprachen",
    ),
    Skills(
        title="React",
        category="Frameworks & Libs.",
    ),
    Skills(
        title="Docker",
        category="Tools",
    ),
    Skills(
        title="FastAPI",
        category="Frameworks & Libs.",
    ),
    Skills(title="SQL",
           category="Frameworks & Libs."),

    Skills(title="Tailwind CSS",category="Frameworks & Libs."),

    Skills(title="Git & Github",category="Tools"),

    Skills(title="ZED SDK",category="Frameworks & Libs."),
]
EXPERIENCES: list[Experiences] = [
    Experiences(
        title="Primarschule",
        description="x",
        timeframe="2009-2015",
        location="Dornach, CH",
    ),
    Experiences(
        title="Sekundarschule",
        description="x",
        timeframe="2015-2018",
        location="Thurgau, CH"
    ),
    Experiences(
        title="Grundausbildung",
        description="x",
        timeframe="2020-2023",
        location="Basel, CH"
    ),

    Experiences(title="Parktikum", description="Anwaltsassistent", timeframe="2023-2024", location="Basel, CH"),

    Experiences(
        title="FHNW",
        description="Data-Science Studium",
        location="Brugg, CH",
        timeframe="2024-"
    )]

DIPLOMAS: list[Diplomas] = [
    Diplomas(
        title="",
        description="x"
    )
]
