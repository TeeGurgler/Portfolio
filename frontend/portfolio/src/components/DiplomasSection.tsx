import { useState, useEffect } from 'react';
import { api } from '../api/client';
import type { Diploma } from '../types';

const categoryIcons: Record<string, string> = {
  'Bildung': '🎓',
  'Sprachen': '🌍',
  'Zertifikate': '🏆',
};

const categoryColors: Record<string, string> = {
  'Bildung': 'bg-blue-600',
  'Sprachen': 'bg-green-600',
  'Zertifikate': 'bg-amber-600',
};

export default function DiplomasSection() {
  const [diplomas, setDiplomas] = useState<Diploma[] | null>(null);

  useEffect(() => {
    api<Diploma[]>('/api/diplomas').then(setDiplomas).catch(console.error);
  }, []);

  const groupedDiplomas = diplomas?.reduce((acc, diploma) => {
    if (!acc[diploma.category]) acc[diploma.category] = [];
    acc[diploma.category].push(diploma);
    return acc;
  }, {} as Record<string, Diploma[]>);

  return (
    <section id="diplomas" className="py-20 sm:py-28 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Diplome & Zertifikate</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Meine Qualifikationen im Überblick.</p>
        </div>

        {!diplomas && <div className="text-center">Lade Diplome...</div>}

        <div className="space-y-12">
          {groupedDiplomas && Object.entries(groupedDiplomas).map(([category, categoryDiplomas]) => (
            <div key={category}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{categoryIcons[category]}</span>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>

              <div className="relative">
                {/* Timeline line - identisch zu ExperiencesSection */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600" />

                <div className="space-y-8">
                  {categoryDiplomas.map((diploma) => (
                    <article key={diploma.title} className="relative pl-20">
                      {/* Timeline dot - identisch zu ExperiencesSection */}
                      <div className={`absolute left-6 top-6 w-5 h-5 rounded-full ${categoryColors[category]} border-4 border-slate-100 dark:border-slate-800`} />

                      {/* Content card - identisch zu ExperiencesSection */}
                      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                        <h4 className="text-xl font-semibold mb-2">{diploma.title}</h4>
                        <p className="text-slate-600 dark:text-slate-300">{diploma.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}