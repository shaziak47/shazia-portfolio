import { education, experiences } from '../data/profile'
import FadeIn from './FadeIn'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Career
          </p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            7+ years building data pipelines, ML systems, and full-stack applications across
            pharma, fintech, and enterprise SaaS.
          </p>
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/30 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={`${exp.company}-${exp.period}`} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden w-1/2 md:block" />
                  <div
                    className={`w-full md:w-1/2 ${
                      i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="glass rounded-2xl p-7 transition hover:border-cyan-500/20">
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-2 ${
                          i % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-xs text-slate-500">{exp.location}</span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-indigo-400">{exp.company}</p>
                      <ul
                        className={`mt-4 space-y-2 ${
                          i % 2 === 0 ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm leading-relaxed text-slate-400"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-4 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-surface md:left-1/2 md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 glass rounded-2xl p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Education
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              {education.degree}
            </h3>
            <p className="mt-1 text-indigo-400">{education.school}</p>
            <p className="mt-2 text-sm text-slate-500">
              {education.period} · {education.location}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
