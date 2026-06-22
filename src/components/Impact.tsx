import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion';

const impactItems = [
  {
    target: 500,
    suffix: '+',
    description: 'Youth engaged across our community programs.',
  },
  {
    target: 120,
    suffix: '+',
    description: 'Talented young people mentored and supported.',
  },
  {
    target: 85,
    suffix: '%',
    description: 'Satisfaction rate among participants and partners.',
  },
];

function AnimatedCount({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const motionValue = useMotionValue(0);
  const [value, setValue] = useState(0);

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setValue(Math.round(latest));
  });

  useEffect(() => {
    if (!trigger) {
      return;
    }

    const controls = animate(motionValue, target, { duration: 1.8, ease: 'easeOut' });
    return controls.stop;
  }, [trigger, target, motionValue]);

  return <p className="text-4xl md:text-5xl font-semibold text-ivory-white mb-5">{value}{suffix}</p>;
}

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="impact" ref={containerRef} className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6"
          >
            Measurable Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-ivory-white"
          >
            Real Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-ivory-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6"
          >
            Every initiative is designed with measurable outcomes, ensuring young people are supported with mentorship, opportunity, and follow-through.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {impactItems.map((item, index) => (
            <motion.div
              key={`${item.target}${item.suffix}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + index * 0.1, duration: 0.8 }}
              className="rounded-[32px] border border-ivory-white/10 bg-ivory-white/5 p-10"
            >
              <AnimatedCount target={item.target} suffix={item.suffix} trigger={isInView} />
              <p className="text-ivory-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
