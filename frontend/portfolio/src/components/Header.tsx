export default function Header() {
  const navLinkClasses = "px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors";

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-700/60">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg">Andrés Jauch</a>
        <nav className="hidden sm:flex space-x-1 text-sm font-medium">
          <a href="#skills" className={navLinkClasses}>Skills</a>
          <a href="#projects" className={navLinkClasses}>Projekte</a>
          <a href="#experiences" className={navLinkClasses}>Erfahrung</a>
          <a href="#diplomas" className={navLinkClasses}>Diplome</a>
          <a href="mailto:[andres.jauch@students.fhnw.ch]" className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}