import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/profile'
import FadeIn from './FadeIn'

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-surface-2/50">
      <div className="glow-orb right-0 top-0 h-64 w-64 bg-indigo-600/10" />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What I Offer
          </p>
          <h2 className="section-title">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            From Fiverr gigs to enterprise consulting — comprehensive development services
            to bring your ideas to life.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex h-full flex-col rounded-2xl p-7 transition hover:border-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 transition group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-cyan-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
