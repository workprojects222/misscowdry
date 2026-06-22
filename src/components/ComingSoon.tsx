import { motion } from 'framer-motion';

export default function ComingSoon({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen bg-charcoal text-ivory-white px-4 sm:px-6 py-20 md:py-32 lg:px-20">
      <div className="container-wide flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.35em] text-ivory-white/40 mb-4"
          >
            Coming Soon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(2rem,8vw,5rem)] font-light leading-[1.1] tracking-[-0.03em] mb-6"
          >
            This page is under construction.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-ivory-white/70 leading-relaxed mb-10"
          >
            We are crafting the next chapter for Cowdray Park Foundation. Check back soon for premium program details and model foundation experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center justify-center rounded-none border border-ivory-white/20 bg-ivory-white/5 px-8 py-4 text-sm uppercase tracking-[0.2em] text-ivory-white transition hover:border-luxury-gold hover:text-luxury-gold"
            >
              Back to site
            </button>
            <p className="text-[11px] lowercase tracking-[0.5em] text-ivory-white/50">
              build and designed by Takudzwa Mbano.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
