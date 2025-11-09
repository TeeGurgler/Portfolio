import { useState, useEffect } from 'react';
import { api } from '../api/client.ts';
import type { Project } from '../types';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    api<Project[]>('/api/projects').then(setProjects).catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Meine Projekte</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Eine Auswahl meiner Arbeiten.</p>
        </div>

        {!projects && <div className="text-center">Lade Projekte...</div>}

        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map(p => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <article className="flex flex-col h-full">
                {/* Image mit Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project →
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow leading-relaxed">{p.description}</p>

                  {/* Tags mit Animation */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t, idx) => (
                      <span
                        key={t}
                        style={{ animationDelay: `${idx * 50}ms` }}
                        className="text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 px-3 py-1.5 rounded-full group-hover:scale-110 transition-transform duration-200"
                      >
                        {t}
                      </span>
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