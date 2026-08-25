import { motion } from 'framer-motion'
import { ExternalLink, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import FadeIn from './FadeIn'

const platforms = [
  {
    name: 'Fiverr',
    handle: '@hamzak47',
    url: profile.fiverr,
    color: 'from-emerald-500/20 to-green-600/20',
    textColor: 'text-emerald-400',
    stat: `${profile.fiverrRating}★ · ${profile.fiverrReviews} reviews`,
  },
  {
    name: 'Upwork',
    handle: 'adeelkhan133',
    url: profile.upwork,
    color: 'from-green-500/20 to-emerald-600/20',
    textColor: 'text-green-400',
    stat: 'Top Rated Freelancer',
  },
  {
    name: 'LinkedIn',
    handle: 'adeel-khan-471135161',
    url: profile.linkedin,
    color: 'from-blue-500/20 to-sky-600/20',
    textColor: 'text-blue-400',
    stat: 'Senior Software Engineer',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="glow-orb left-1/4 bottom-0 h-80 w-80 bg-cyan-500/10" />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Reach out via email or hire me on Fiverr or Upwork.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-xl font-semibold text-white">
                Get in touch
              </h3>
              <div className="mt-8 space-y-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-cyan-500/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="font-medium text-white group-hover:text-cyan-300">
                      {profile.email}
                    </p>
                  </div>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-cyan-500/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="font-medium text-white group-hover:text-cyan-300">
                      {profile.phone}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="font-medium text-white">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {platforms.map((platform, i) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group glass flex items-center justify-between rounded-2xl p-6 transition hover:border-cyan-500/20"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${platform.color}`}
                    >
                      {platform.name === 'LinkedIn' ? (
                        <Linkedin className={`h-6 w-6 ${platform.textColor}`} />
                      ) : (
                        <span className={`font-display text-lg font-bold ${platform.textColor}`}>
                          {platform.name[0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white">
                        {platform.name}
                      </p>
                      <p className="text-sm text-slate-500">{platform.handle}</p>
                      <p className={`mt-1 text-xs ${platform.textColor}`}>{platform.stat}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-600 transition group-hover:text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
