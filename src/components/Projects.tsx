import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../data/profile'
import FadeIn from './FadeIn'

const filters = ['All', 'Featured', 'Freelance', 'Enterprise', 'Research', 'Platform'] as const
type Filter = (typeof filters)[number]

function matchesFilter(project: Project, filter: Filter) {
  if (filter === 'All') return true
  if (filter === 'Featured') return project.featured
  return project.category === filter
}

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')
  const filtered = projects.filter((p) => matchesFilter(p, active))

  return (
    <section id="projects" className="section-padding relative bg-surface-2/50">
      <div className="glow-orb -left-20 bottom-0 h-72 w-72 bg-cyan-500/10" />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Portfolio
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of work from enterprise roles, Fiverr, Upwork, and research — spanning
            data engineering, AI, and full-stack development.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group glass relative overflow-hidden rounded-2xl"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient.replace('/20', '/60')}`}
                />
                <div className="p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {project.source}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
