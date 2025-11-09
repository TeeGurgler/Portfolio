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
          <h2 className="text-3xl font-bold">Tech Stack</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Technologien, mit denen ich arbeite.</p>
        </div>

        {!skills && <div className="text-center">Lade Skills...</div>}

        <div className="grid md:grid-cols-3 gap-8">
          {groupedSkills && Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="relative group"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${categoryColors[category]} rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-300`} />

              {/* Card Content */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-100 dark:border-slate-800">
                  <div className={`text-3xl p-2 rounded-lg bg-gradient-to-br ${categoryColors[category]} bg-opacity-10`}>
                    {categoryIcons[category]}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {categorySkills.map((skill, idx) => (
                    <span
                      key={skill.title}
                      style={{ animationDelay: `${idx * 30}ms` }}
                      className="flex items-center gap-2 text-sm font-medium bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 text-slate-800 dark:text-slate-200 px-3.5 py-2.5 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {skill.icon_url && (
                        <img src={skill.icon_url} alt="" className="w-5 h-5 drop-shadow-sm" />
                      )}
                      {skill.title}
                    </span>
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