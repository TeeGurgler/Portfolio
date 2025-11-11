from .models import *

PROJECTS: list[Project] = [
    Project(
        id=1,
        title="Container Tracking",
        description="Umfassende Python-Anwendung zur Erstellung und Visualisierung von Schiffsrouten-Karten mit interaktiven Dashboards.",
        imageUrl=HttpUrl("https://blog.paessler.com/hubfs/ContainerMonitoring.png"),
        url=HttpUrl("https://github.com/NotSchebs/Cde1-1Da_Challenge_FHNW"),
        tags=["Python", "Pandas", "Folium", "Data Visualization"],
        featured=True,
    ),
    Project(
        id=2,
        title="Tennis Tracking & Analysis",
        description="Video-basierte Tennis-Analyse mit Stereo-Kamera, 3D-Tracking und Streamlit Dashboard für Echtzeit-Trainingsauswertung.",
        imageUrl=HttpUrl("https://www.rishabhsoft.com/wp-content/uploads/2023/04/Blog-Banner-Computer-Vision.jpg"),
        url=HttpUrl("https://github.com/TeeGurgler/CDA2-3Da"),
        tags=["Python", "ZED SDK", "Streamlit", "Computer Vision", "Jupyter"],
        featured=True,
    ),
    Project(
        id=3,
        title="Demografische Datenanalyse",
        description="Statistische Analyse der Schweizer Strukturerhebungsdaten mit Fokus auf Migrationsmuster und demografische Trends.",
        imageUrl=HttpUrl("https://images.ctfassets.net/lzny33ho1g45/5FH7fLMZABa2N5O25hniRV/e980968e81b8bcda2bebffc98736e47a/Data_analysis_hero.jpg?fm=jpg&q=31&fit=thumb&w=1520&h=760"),
        url=HttpUrl("https://github.com/TeeGurgler/CDE1-Demografie"),
        tags=["R", "Data Analysis", "Statistics", "Visualization"],
        featured=False,
    ),
    Project(
        id=4,
        title="Portfolio Website",
        description="Moderne Full-Stack Portfolio-Anwendung mit React Frontend und FastAPI Backend, deployed mit Docker.",
        imageUrl=HttpUrl("https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg"),
        url=HttpUrl("https://github.com/TeeGurgler/Portfolio"),
        tags=["React", "TypeScript", "FastAPI", "Docker", "TailwindCSS"],
        featured=True,
    ),
]

SKILLS: list[Skills] = [
    # Languages
    Skills(title="Python", category="Sprachen", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"),
    Skills(title="R", category="Sprachen", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"),
    Skills(title="TypeScript", category="Sprachen", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"),
    Skills(title="JavaScript", category="Sprachen", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"),
    Skills(title="SQL", category="Sprachen", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"),

    # Frameworks & Libraries
    Skills(title="React", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"),
    Skills(title="FastAPI", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"),
    Skills(title="Tailwind CSS", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"),
    Skills(title="Pandas", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"),
    Skills(title="NumPy", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"),
    Skills(title="Streamlit", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"),
    Skills(title="ZED SDK", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"),
    Skills(title="Pydantic", category="Frameworks & Libs.", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"),

    # Tools
    Skills(title="Docker", category="Tools", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"),
    Skills(title="Git & GitHub", category="Tools", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"),
    Skills(title="Vite", category="Tools", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"),
    Skills(title="pip-tools", category="Tools", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"),
    Skills(title="Jupyter Notebooks", category="Tools", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"),
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