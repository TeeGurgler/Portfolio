import { useState, useEffect } from 'react';
import { api } from '../api/client.ts';
import type { Project } from '../types';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    api<Project[]>('/api/projects').then(setProjects).catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Meine Projekte</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Eine Auswahl meiner Arbeiten.</p>
        </div>

        {!projects && <div className="text-center">Lade Projekte...</div>}

        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map(p => (
            <a key={p.id} href={p.url} target="_blank" rel="noreferrer" className="group block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
              <article className="overflow-hidden rounded-xl flex flex-col h-full">
                <img src={p.imageUrl} alt={p.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}