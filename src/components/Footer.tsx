import { Heart } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-surface-2/30 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10 lg:px-16">
        <p className="font-display text-lg font-bold">
          <span className="gradient-text">{profile.shortName}</span>
        </p>
        <p className="flex items-center gap-1 text-sm text-slate-500">
          Built with React & Framer Motion
          <Heart className="mx-1 h-3.5 w-3.5 fill-pink-500 text-pink-500" />
          {year}
        </p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 transition hover:text-pink-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
