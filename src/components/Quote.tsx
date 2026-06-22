import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Quote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center bg-charcoal"
    >
      <div className="px-6 md:px-12 lg:px-20 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-ivory-white max-w-5xl"
        >
          <p className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-light leading-[1.1] tracking-[-0.02em] mb-2">
            Empowering Youth.
          </p>
          <p className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-light leading-[1.1] tracking-[-0.02em] mb-2">
            Transforming Communities.
          </p>
          <p className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-semibold leading-[1.1] tracking-[-0.02em] text-ivory-white">
            Building The Future.
          </p>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '200px' } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-px bg-ivory-white/20 mt-12 md:mt-16"
        />
      </div>

      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:right-20"
      >
        <p className="text-ivory-white/30 text-xs tracking-[0.2em]">SECTION 08</p>
      </motion.div>
    </section>
  );
}
