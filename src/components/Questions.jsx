import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe2, Fish, Microscope, SearchCheck, Plus } from 'lucide-react'
import henrysFork from '../assets/photos/henrys-fork-stream.jpg'

const questions = [
  {
    icon: Globe2,
    q: 'How are microplastics reaching remote areas?',
    a: "Even miles from the nearest town, streams carry fibers and fragments in from wind, runoff, and upstream sources — evidence that this pollutant doesn't need a city nearby to show up.",
  },
  {
    icon: Fish,
    q: 'Is this affecting fish and wildlife?',
    a: 'These streams support trout, moose, and the rest of a working mountain ecosystem. The long-term effects of ingested microplastics on wildlife health are still an open question in the field, which is exactly why baseline monitoring like this matters.',
  },
  {
    icon: Microscope,
    q: 'What type of microplastics have you found in your samples?',
    a: 'Mostly colored and clear fibers, with some fragments — identified visually under 40× magnification by texture, color, and resistance to being teased apart.',
  },
  {
    icon: SearchCheck,
    q: "How do you know your samples aren't self-contaminated?",
    a: 'Every team member wears pink lab attire during processing, so any pink fibers found on a filter are immediately flagged as likely contamination rather than a true environmental sample — plus a control sample runs alongside every batch.',
  },
]

function Item({ item, isOpen, onToggle }) {
  const Icon = item.icon
  return (
    <div className="border-b border-stream-800">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-6 text-left"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stream-800 text-stream-200">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="flex-1 font-display text-lg font-medium text-stream-50 sm:text-xl">
          {item.q}
        </span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-stream-400">
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-6 pl-14 text-sm leading-relaxed text-stream-300 sm:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Questions() {
  const [open, setOpen] = useState(1)

  return (
    <section className="bg-stream-950 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-clay-400">
              Ask Us Anything
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-stream-50 sm:text-4xl">
              Questions to ask us
            </h2>
          </motion.div>
          <div className="mt-8">
            {questions.map((item, i) => (
              <Item key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="overflow-hidden rounded-2xl border border-stream-800 shadow-xl">
            <img
              src={henrysFork}
              alt="A moose wading in Henry's Fork of the Snake River, Idaho"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stream-400">
            A moose wades through Henry's Fork of the Snake River — one of many species sharing
            these same waters. <span className="text-stream-500">USFS / R. Peterson, public domain</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
