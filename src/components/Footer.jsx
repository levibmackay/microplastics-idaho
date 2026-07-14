import { motion } from 'framer-motion'
import { Droplets } from 'lucide-react'
import { team } from '../data/sites'

export default function Footer() {
  return (
    <footer className="bg-stream-950 px-6 py-16 text-stream-300">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"
      >
        <div className="flex items-center gap-2 text-stream-100">
          <Droplets className="h-5 w-5 text-stream-400" strokeWidth={1.75} />
          <span className="font-display text-lg font-semibold">Microplastics in Remote Streams</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {team.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>

        <p className="max-w-md text-sm text-stream-500">
          Chem 490R Internship &middot; BYU&ndash;Idaho, Rexburg &middot; Spring&ndash;Summer 2026
        </p>

        <p className="text-xs text-stream-600">
          Landscape photography: U.S. Forest Service &amp; Bureau of Land Management, public domain.
        </p>
      </motion.div>
    </footer>
  )
}
