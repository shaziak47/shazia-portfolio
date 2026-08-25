import { motion } from 'framer-motion'
import { achievements, education, profile } from '../data/profile'
import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>
          <h2 className="section-title">
            Building <span className="gradient-text">intelligent systems</span> that scale
          </h2>
          <p className="section-subtitle">
            Senior Software Engineer with a passion for data science, cloud architecture,
            and delivering products that make a real impact.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="glass rounded-3xl p-8 md:p-10">
              <p className="text-lg leading-relaxed text-slate-300">
                I am a <strong className="text-white">Senior Software Engineer</strong> with
                extensive experience in data engineering, machine learning, and cloud
                computing. I have a solid track record of architecting scalable solutions and
                leading teams in delivering innovative technologies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                My passion lies in leveraging data science to drive insights and efficiencies
                within organizations — especially in the pharmaceutical sector. On Fiverr and
                Upwork, I&apos;ve helped 85+ clients build Python applications, AI SaaS products,
                and automation tools.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Email', value: profile.email },
                  { label: 'Phone', value: profile.phone },
                  { label: 'Location', value: profile.location },
                  { label: 'Education', value: education.degree },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.2}>
            <div className="flex h-full flex-col gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass group flex gap-4 rounded-2xl p-5 transition hover:border-cyan-500/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 transition group-hover:from-cyan-500/30 group-hover:to-indigo-500/30">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
