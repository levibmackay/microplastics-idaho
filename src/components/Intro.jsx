import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="intro" className="bg-stream-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm font-medium uppercase tracking-[0.2em] text-stream-500"
        >
          The Research Question
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-2xl font-semibold leading-snug text-stream-900 sm:text-4xl"
        >
          How many microplastics are found in the water sources of Southeastern Idaho?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-stream-700 sm:text-lg"
        >
          Microplastics are an emerging pollutant that have already reached remote environments.
          Scientists are still developing standardized methods to detect and identify them, and
          many questions remain about their effects on human and ecosystem health. Understanding
          that impact starts with careful, repeatable measurement — which is what this project
          set out to build.
        </motion.p>
      </div>
    </section>
  )
}
