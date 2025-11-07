import { useState, useEffect } from 'react';
// CORRECTION #1: Use a standard relative path to find the client.ts file
import { api } from '../api/client';
import type { Skill } from '../types';

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[] | null>(null);

  useEffect(() => {
    // This fetches the data from your backend
    api<Skill[]>('/api/skills').then(setSkills).catch(console.error);
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Tech Stack</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">A selection of technologies I work with.</p>
        </div>

        {/* Display a loading message while waiting for data */}
        {!skills && <div className="text-center">Loading Skills...</div>}

        {/* Once data is loaded, map over it and display each skill */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills?.map(skill => (
            // CORRECTION #2: Use "skill.name" because that is the field name defined in your backend
            <div key={skill.title} className="bg-white dark:bg-slate-900/50 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="font-medium text-center">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}