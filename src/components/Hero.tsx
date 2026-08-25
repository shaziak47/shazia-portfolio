import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail, Star } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
    >
      <div className="glow-orb -left-32 top-20 h-96 w-96 bg-cyan-500/20" />
      <div className="glow-orb -right-20 bottom-20 h-80 w-80 bg-indigo-600/20" />
      <div className="grid-bg absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div style={{ y, opacity }} className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for freelance & full-time opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 font-display text-lg text-slate-400"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{profile.shortName}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500"
          >
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-amber-400" />
              {profile.fiverrRating} ({profile.fiverrReviews} reviews)
            </span>
            <span>·</span>
            <span>{profile.fiverrLevel}</span>
            <span>·</span>
            <span>{profile.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40"
            >
              <span className="relative z-10">View My Work</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:border-cyan-500/30 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800/50 to-slate-900/80 p-2 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}adeel-portrait.png`}
                alt={profile.name}
                className="h-[380px] w-[300px] rounded-2xl object-cover object-top md:h-[480px] md:w-[380px]"
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 rounded-2xl glass px-5 py-3 shadow-xl"
            >
              <p className="text-xs text-slate-400">Experience</p>
              <p className="font-display text-2xl font-bold text-cyan-400">7+ Years</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-8 rounded-2xl glass px-5 py-3 shadow-xl"
            >
              <p className="text-xs text-slate-400">Projects Delivered</p>
              <p className="font-display text-2xl font-bold text-indigo-400">100+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-cyan-400"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
