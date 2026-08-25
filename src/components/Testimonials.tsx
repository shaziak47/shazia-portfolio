import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/profile'
import FadeIn from './FadeIn'

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface-2/50">
      <div className="glow-orb right-1/4 top-1/2 h-64 w-64 bg-purple-600/10" />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Testimonials
          </p>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass flex h-full flex-col rounded-2xl p-7"
              >
                <Quote className="h-8 w-8 text-cyan-500/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-cyan-400">— {t.author}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
