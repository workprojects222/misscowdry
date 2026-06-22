import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { headingLineVariants } from '../animations';

export default function Quote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] flex items-center bg-charcoal py-16 md:py-20 lg:py-24"
    >
      <div className="container-wide">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl space-y-3"
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={headingLineVariants}
              custom={0}
              className="text-[clamp(1.6rem,4.5vw,6rem)] font-light leading-[1.1] tracking-[-0.03em] text-ivory-white"
            >
              Empowering Youth.
            </motion.h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.h2
              variants={headingLineVariants}
              custom={1}
              className="text-[clamp(1.6rem,4.5vw,6rem)] font-light leading-[1.1] tracking-[-0.03em] text-ivory-white"
            >
              Transforming Communities.
            </motion.h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.h2
              variants={headingLineVariants}
              custom={2}
              className="text-[clamp(1.6rem,4.5vw,6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-luxury-gold"
            >
              Building The Future.
            </motion.h2>
          </div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '100%', maxWidth: '280px', opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.8, ease: 'easeOut' }}
            className="h-px bg-luxury-gold/40 mt-12 md:mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}
