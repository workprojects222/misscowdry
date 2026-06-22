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

  return <p className="text-4xl md:text-5xl font-semibold text-ivory-white mb-4">{value}{suffix}</p>;
}

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="impact" ref={containerRef} className="relative overflow-hidden bg-charcoal py-18 md:py-22 lg:py-28">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-14 lg:mb-18 max-w-3xl"
        >
          <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6">Measurable Impact</p>
          <h2 className="text-[clamp(1.8rem,5vw,7rem)] font-light tracking-[-0.02em] text-ivory-white mb-8">
            Real Change
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-ivory-white/70">
            Every initiative is designed with measurable outcomes, ensuring young people are supported with mentorship, opportunity, and follow-through.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-5 md:gap-6 lg:gap-8 md:grid-cols-3">
          {impactItems.map((item, index) => (
            <motion.div
              key={`${item.target}${item.suffix}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="rounded-[24px] border border-ivory-white/10 bg-ivory-white/5 p-8 md:p-10 lg:p-12"
            >
              <AnimatedCount target={item.target} suffix={item.suffix} trigger={isInView} />
              <p className="text-ivory-white/60 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
