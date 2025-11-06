import type { Project } from '../types'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border bg-white shadow-sm p-5">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        {p.featured && <span className="text-xs px-2 py-1 rounded-full bg-amber-100 border">Featured</span>}
      </div>
      <p className="mt-2 text-sm text-gray-700">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span key={t} className="text-xs bg-gray-100 border px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
      {p.url && (
        <a href={p.url} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm underline">Visit</a>
      )}
    </article>
  );
}