import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Quote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center bg-charcoal py-24 md:py-32 lg:py-48"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-[-0.03em] text-ivory-white mb-6"
          >
            Empowering Youth.
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-[-0.03em] text-ivory-white mb-6"
          >
            Transforming Communities.
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] tracking-[-0.03em] text-luxury-gold"
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
