import { motion } from 'framer-motion'
import pleasantValley from '../assets/photos/pleasant-valley.jpg'
import { bottleLog } from '../data/sites'

export default function FieldNotes() {
  return (
    <section id="fieldnotes" className="bg-stream-50 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-stream-200 shadow-lg"
        >
          <img
            src={pleasantValley}
            alt="Rural Idaho rangeland near Pleasant Valley, Clark County"
            className="h-80 w-full object-cover sm:h-[26rem]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-stream-500">
            From the Field Notebook
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stream-900 sm:text-4xl">
            Every bottle gets a name
          </h2>
          <p className="mt-4 text-stream-700">
            Somewhere between the tenth sieve and the third overnight digestion, sample bottles
            stopped being "Site 4" and started being <em>Megan Fox 2009</em> and{' '}
            <em>Nap Dynamite</em>. It's a small ritual — but it's also how a four-person team
            keeps months of data straight without mixing up a single filter.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {bottleLog.map((b) => (
              <span
                key={b.name}
                className="rounded-full border border-stream-200 bg-white px-3 py-1.5 text-sm text-stream-700 shadow-sm"
              >
                {b.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
