import { useState, useEffect } from 'react';
import { api } from '../api/client';
import type { BlogPost } from '../types';
import { DocumentTextIcon, CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    api<BlogPost[]>('/api/blog').then(setPosts).catch(console.error);
  }, []);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Blog
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Reflexionen und Gedanken.</p>
        </div>

        {!posts && <div className="text-center">Lade Blogposts...</div>}

        <div className="space-y-8">
          {posts?.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                      <DocumentTextIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  {post.url && (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label="Zum Job"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </a>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <CalendarIcon className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString('de-CH', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}