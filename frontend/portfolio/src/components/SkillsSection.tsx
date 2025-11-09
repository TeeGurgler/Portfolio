import { useState, useEffect } from 'react';
import { api } from '../api/client';
import type { Skill } from '../types';

const categoryIcons: Record<string, string> = {
  'Sprachen': '⌨️',
  'Frameworks & Libs.': '⚙️',
  'Tools': '🔧',
};

const categoryColors: Record<string, string> = {
  'Sprachen': 'from-blue-500 to-cyan-500',
  'Frameworks & Libs.': 'from-purple-500 to-pink-500',
  'Tools': 'from-orange-500 to-red-500',
};

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[] | null>(null);

  useEffect(() => {
    api<Skill[]>('/api/skills').then(setSkills).catch(console.error);
  }, []);

  const groupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tech Stack</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Technologien, mit denen ich arbeite.</p>
        </div>

        {!skills && <div className="text-center">Lade Skills...</div>}

        <div className="grid md:grid-cols-3 gap-6">
          {groupedSkills && Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="relative rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category]} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-5">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category]}
                </span>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {categorySkills.map((skill, idx) => (
                  <span
                    key={skill.title}
                    style={{ animationDelay: `${idx * 30}ms` }}
                    className="text-sm font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg hover:scale-110 hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}