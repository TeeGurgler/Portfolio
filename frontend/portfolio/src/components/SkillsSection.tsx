import { useState, useEffect } from 'react';
import { api } from '../client';
import type { Skill } from '../types';

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[] | null>(null);

  useEffect(() => {
    api<Skill[]>('/api/skills').then(setSkills).catch(console.error);
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Skills & Technologien</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Eine Auswahl der Technologien, mit denen ich arbeite.</p>
        </div>

        {!skills && <div className="text-center">Lade Skills...</div>}

        <div className="flex flex-wrap justify-center gap-4">
          {skills?.map(skill => (
            <div key={skill.title} className="bg-white dark:bg-slate-900/50 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="font-medium text-center">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}