import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.03em] text-ivory-white mb-5"
          >
            Empowering Youth.
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.03em] text-ivory-white mb-5"
          >
            Transforming Communities.
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.03em] text-luxury-gold"
          >
            Building The Future.
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%', maxWidth: '280px' } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-px bg-luxury-gold/40 mt-12 md:mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}
