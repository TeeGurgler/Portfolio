import { useEffect, useState } from 'react'
import { api } from '../api/client'
import type { Project } from '../types'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [data, setData] = useState<Project[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api<Project[]>('/api/projects')
      .then(setData)
      .catch(e => setError(String(e)))
  }, [])

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Projects</h1>

      {error && <p className="mt-4 text-red-600">{error}</p>}
      {!data && !error && <p className="mt-4">Loading…</p>}

      {data && (
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {data.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      )}
    </main>
  )
}