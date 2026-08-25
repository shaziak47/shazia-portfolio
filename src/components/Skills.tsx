import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'
import FadeIn from './FadeIn'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Toolkit
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning data engineering, machine learning, cloud
            infrastructure, and full-stack development.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-7">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.category}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      group.level === 'Expert'
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : group.level === 'Advanced'
                          ? 'bg-indigo-500/10 text-indigo-400'
                          : 'bg-slate-500/10 text-slate-400'
                    }`}
                  >
                    {group.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.03 }}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-500/20 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
