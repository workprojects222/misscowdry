import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const impactItems = [
  {
    count: '+500',
    description: 'Youth engaged across our community programs.',
  },
  {
    count: '+120',
    description: 'Talented young people mentored and supported.',
  },
  {
    count: '+85%',
    description: 'Satisfaction rate among participants and partners.',
  },
];

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="impact" ref={containerRef} className="relative overflow-hidden bg-warm py-24 md:py-32 lg:py-40">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-charcoal/50 text-xs tracking-[0.3em] uppercase mb-6"
          >
            Measurable Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-charcoal"
          >
            Real Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-charcoal/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6"
          >
            Every initiative is designed with measurable outcomes, ensuring young people are supported with mentorship, opportunity, and follow-through.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.count}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + index * 0.1, duration: 0.8 }}
              className="rounded-[32px] border border-charcoal/10 bg-white/10 p-10"
            >
              <p className="text-4xl md:text-5xl font-semibold text-charcoal mb-5">{item.count}</p>
              <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
