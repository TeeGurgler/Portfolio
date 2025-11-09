from .models import *

PROJECTS: list[Project] = [
    Project(
        id=1,
        title="Container Tracking",
        description="Umfassende Python-Anwendung zur Erstellung und Visualisierung von Schiffsrouten-Karten mit interaktiven Dashboards.",
        imageUrl=HttpUrl("https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"),
        url=HttpUrl("https://github.com/NotSchebs/Cde1-1Da_Challenge_FHNW"),
        tags=["Python", "Pandas", "Folium", "Data Visualization"],
        featured=True,
    ),
    Project(
        id=2,
        title="Tennis Tracking & Analysis",
        description="Video-basierte Tennis-Analyse mit Stereo-Kamera, 3D-Tracking und Streamlit Dashboard für Echtzeit-Trainingsauswertung.",
        imageUrl=HttpUrl("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"),
        url=HttpUrl("https://github.com/TeeGurgler/CDA2-3Da"),
        tags=["Python", "ZED SDK", "Streamlit", "Computer Vision", "Jupyter"],
        featured=True,
    ),
    Project(
        id=3,
        title="Demografische Datenanalyse",
        description="Statistische Analyse der Schweizer Strukturerhebungsdaten mit Fokus auf Migrationsmuster und demografische Trends.",
        url=HttpUrl("https://github.com/TeeGurgler/CDE1-Demografie"),
        tags=["R", "Data Analysis", "Statistics", "Visualization"],
        featured=False,
    ),
    Project(
        id=4,
        title="Portfolio Website",
        description="Moderne Full-Stack Portfolio-Anwendung mit React Frontend und FastAPI Backend, deployed mit Docker.",
        imageUrl=HttpUrl("https://images.unsplash.com/photo-1460925895917-afdab827c52f"),
        url=HttpUrl("https://github.com/TeeGurgler/Portfolio"),
        tags=["React", "TypeScript", "FastAPI", "Docker", "TailwindCSS"],
        featured=True,
    ),
]

SKILLS: list[Skills] = [
    # Languages
    Skills(title="Python", category="Sprachen"),
    Skills(title="R", category="Sprachen"),
    Skills(title="TypeScript", category="Sprachen"),
    Skills(title="JavaScript", category="Sprachen"),
    Skills(title="SQL", category="Sprachen"),

    # Frameworks & Libraries
    Skills(title="React", category="Frameworks & Libs."),
    Skills(title="FastAPI", category="Frameworks & Libs."),
    Skills(title="Tailwind CSS", category="Frameworks & Libs."),
    Skills(title="Pandas", category="Frameworks & Libs."),
    Skills(title="NumPy", category="Frameworks & Libs."),
    Skills(title="Streamlit", category="Frameworks & Libs."),
    Skills(title="ZED SDK", category="Frameworks & Libs."),
    Skills(title="Pydantic", category="Frameworks & Libs."),

    # Tools
    Skills(title="Docker & Docker Compose", category="Tools"),
    Skills(title="Git & GitHub", category="Tools"),
    Skills(title="Vite", category="Tools"),
    Skills(title="pip-tools", category="Tools"),
    Skills(title="Jupyter Notebooks", category="Tools"),
]

EXPERIENCES: list[Experiences] = [
    Experiences(
        title="FHNW - Fachhochschule Nordwestschweiz",
        description="Bachelor Studium Data Science",
        timeframe="2024 - heute",
        location="Brugg, CH"
    ),
    Experiences(
        title="Praktikum als Anwaltsassistent",
        description="Unterstützung bei juristischen Recherchen, Dokumentenverwaltung und Mandantenbetreuung.",
        timeframe="2023 - 2024",
        location="Basel, CH"
    ),
    Experiences(
        title="Kaufmännische Grundausbildung",
        description="Abschluss der kaufmännischen Berufslehre mit Schwerpunkt Administration und Kundenkommunikation.",
        timeframe="2020 - 2023",
        location="Basel, CH"
    ),
]

DIPLOMAS: list[Diplomas] = [
    Diplomas(
        title="Bachelor Data Science (laufend)",
        description="FHNW Fachhochschule Nordwestschweiz",
        category="Bildung"
    ),
    Diplomas(
        title="Eidgenössische Berufsmaturität BM1",
        description="Ausrichtung Wirtschaft und Dienstleistungen, Typ Wirtschaft mit Schwerpunkt Recht",
        category="Bildung"
    ),
    Diplomas(
        title="Eidgenössisches Fähigkeitszeugnis (EFZ)",
        description="Kaufmann Administration und Dienstleistung",
        category="Bildung"
    ),
    Diplomas(
        title="Handelsdiplom VSH",
        description="Verband Schweizerischer Handelsschulen",
        category="Bildung"
    ),
    Diplomas(
        title="Bürofachdiplom VSH",
        description="Verband Schweizerischer Handelsschulen",
        category="Bildung"
    ),
    Diplomas(
        title="Cambridge Certificate",
        description="Internationales Englisch-Zertifikat",
        category="Sprachen"
    ),
    Diplomas(
        title="DELF/DALF",
        description="Französisch-Diplom",
        category="Sprachen"
    ),
    Diplomas(
        title="ECDL",
        description="European Certificate of Digital Literacy",
        category="Zertifikate"
    ),
]