import { motion } from 'framer-motion';

export default function ComingSoon({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen bg-charcoal text-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl flex-col items-center justify-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-warm/40">Coming Soon</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-white">
            This page is under construction.
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base leading-relaxed text-warm/70">
            We are crafting the next chapter for Cowdray Park Foundation. Check back soon for premium program details and model foundation experiences.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-none border border-white/20 bg-white/5 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:border-lime hover:text-lime"
          >
            Back to site
          </button>
          <p className="text-[11px] lowercase tracking-[0.5em] text-warm/50">
            build and designed by Takudzwa Mbano.
          </p>
        </div>
      </div>
    </section>
  );
}
