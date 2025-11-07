export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-3xl text-center">
        <span className="text-blue-500 font-semibold">Data Scientist</span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Andrés Jauch.
        </h1>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-slate-600 dark:text-slate-400">
          Ich nutze Daten, um bessere Entscheidungen zu ermöglichen.
        </h2>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
           Als Data Science Student begeistert es mich, analytische Methoden und Machine Learning einzusetzen, um aus komplexen Datensätzen klare, handlungsleitende Einsichten zu gewinnen.
        </p>
        <div className="mt-8">
          <a href="mailto:[andres.jauch@students.fhnw.ch]" className="inline-block py-3 px-8 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full transition-transform hover:scale-105">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}