import { useState, useEffect } from 'react';
import { api } from '../api/client.ts';
import type { Experience } from '../types';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function ExperiencesSection() {
  const [experiences, setExperiences] = useState<Experience[] | null>(null);

  useEffect(() => {
    api<Experience[]>('/api/experiences').then(setExperiences).catch(console.error);
  }, []);

  return (
    <section id="experiences" className="py-20 sm:py-28 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-red-600 bg-clip-text text-transparent">Lebenslauf</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Mein beruflicher Werdegang.</p>
        </div>

        {!experiences && <div className="text-center">Lade Erfahrungen...</div>}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md" />

          <div className="space-y-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
            {experiences?.map((exp, _idx) => (
              <article key={exp.title} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-100 dark:border-slate-800 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md" />

                {/* Content card */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">{exp.title}</h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {exp.timeframe}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}