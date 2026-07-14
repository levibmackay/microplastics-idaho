import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import camasMeadows from '../assets/photos/camas-meadows.jpg'
import { team } from '../data/sites'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-stream-950 text-white">
      <img
        src={camasMeadows}
        alt="Sagebrush meadow and mountains near Kilgore, Idaho"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stream-950 via-stream-950/70 to-stream-950/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-stream-950/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-40 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-sm font-medium uppercase tracking-[0.3em] text-stream-200"
        >
          BYU–Idaho · Chem 490R · Clark &amp; Madison Counties, Idaho
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Microplastics in
          <br />
          Remote Streams
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-stream-100"
        >
          How does an emerging pollutant reach the headwaters of Southeastern Idaho, miles from
          any city? We built a field-to-microscope procedure to find out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stream-300"
        >
          {team.map((name, i) => (
            <span key={name} className="flex items-center gap-3">
              {name}
              {i < team.length - 1 && <span className="h-1 w-1 rounded-full bg-stream-500" />}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-stream-200"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
