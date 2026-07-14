import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Droplets, Filter, FlaskConical, Layers, Microscope } from 'lucide-react'

const steps = [
  {
    icon: Droplets,
    title: 'Collect',
    detail:
      'Water is drawn from each remote stream site into 1–1.5 L stainless-steel bottles, labeled with site ID, date, and sample notes.',
  },
  {
    icon: Filter,
    title: 'Sieve & Concentrate',
    detail:
      'Each sample passes through a 250 µm stainless sieve. Retained material is rinsed with DI water into a clean beaker to concentrate the sample.',
  },
  {
    icon: FlaskConical,
    title: 'Digest',
    detail:
      "Fenton's reagent and hydrogen peroxide are added in proportion to sample volume, then stirred overnight to break down organic material — clearing the way to see what's actually plastic.",
  },
  {
    icon: Layers,
    title: 'Filter & Dry',
    detail:
      'The digested sample is filtered onto glass fiber paper, stored in a foil-covered Petri dish, and dried completely before analysis.',
  },
  {
    icon: Microscope,
    title: 'Count',
    detail:
      'Every filter is scanned at 40× magnification. Particles and pink contamination-control fibers are double-counted and cross-checked between labmates.',
  },
]

function Step({ step, index }) {
  const Icon = step.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative flex items-start gap-5 sm:gap-8 py-8 sm:py-10"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', bounce: 0.5 }}
        className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-stream-50 text-stream-700 shadow-lg ring-4 ring-stream-950"
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-clay-500 font-display text-xs font-semibold text-white">
          {index + 1}
        </span>
      </motion.div>
      <div className="pt-1 sm:pt-2">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-stream-50">{step.title}</h3>
        <p className="mt-2 max-w-md text-sm sm:text-base leading-relaxed text-stream-200">{step.detail}</p>
      </div>
    </motion.div>
  )
}

export default function Methods() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="methods" className="relative bg-stream-950 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-clay-400">
            Our Methods
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-stream-50">
            From stream to slide
          </h2>
          <p className="mt-4 max-w-xl text-stream-300">
            Five steps, refined over a semester of trial, error, and torn filter papers, take
            each sample from a mountain creek to a countable particle under the microscope.
          </p>
        </motion.div>

        <div ref={ref} className="relative mt-6 pl-[27px] sm:pl-[31px]">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-stream-800" aria-hidden="true" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-[2px] origin-top bg-gradient-to-b from-stream-400 to-clay-400"
            aria-hidden="true"
          />
          <div className="-ml-[27px] sm:-ml-[31px]">
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
