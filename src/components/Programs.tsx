import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { programImages } from '../assets/images';

const programs = [
  {
    id: 1,
    title: 'Youth Empowerment',
    number: '01',
    description:
      'Equipping young people with the skills, confidence, and opportunities they need to become active contributors to society.',
    image: programImages[0],
  },
  {
    id: 2,
    title: 'Talent Nurturing',
    number: '02',
    description:
      'Identifying and developing unique talents in young individuals. From arts to sports to technology.',
    image: programImages[1],
  },
  {
    id: 3,
    title: 'Community Upliftment',
    number: '03',
    description:
      'Driving sustainable development initiatives that transform communities through collaborative projects.',
    image: programImages[2],
  },
  {
    id: 4,
    title: 'Social Impact & Youth Rehabilitation',
    number: '04',
    description:
      'Supporting at-risk youth through mentorship programs, counseling services, and skills training.',
    image: programImages[3],
  },
  {
    id: 5,
    title: 'Patriotism & Leadership Development',
    number: '05',
    description:
      'Cultivating responsible citizens and future leaders equipped to guide communities toward progress.',
    image: programImages[4],
  },
];

function ProgramBlock({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: true, margin: '-150px' });
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const isEven = index % 2 === 0;

  return (
    <section ref={blockRef} className="relative py-20 md:py-28">
      <div className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full overflow-hidden"
          style={{ y }}
        >
          <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`relative max-w-xl mx-auto px-6 md:px-10 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}
        >
          <span className="text-charcoal/50 text-xs tracking-[0.25em] uppercase mb-4 inline-block">
            Program {program.number}
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6">
            {program.title}
          </h3>
          <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-10">
            {program.description}
          </p>
          <button
            type="button"
            onClick={() => (window.location.hash = 'coming-soon')}
            className="inline-flex items-center justify-center rounded-sm border border-charcoal/20 bg-white/10 px-8 py-4 text-sm tracking-[0.2em] uppercase text-charcoal transition hover:border-lime hover:text-lime"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="programs" ref={containerRef} className="relative bg-warm">
      <div className="container-wide text-center py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-charcoal/50 text-xs tracking-[0.3em] uppercase mb-6"
        >
          Our Programs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-charcoal mb-4"
        >
          Transforming Youth
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-charcoal"
        >
          Transforming Communities
        </motion.h2>
      </div>

      <div className="container-wide space-y-20">
        {programs.map((program, index) => (
          <ProgramBlock key={program.id} program={program} index={index} />
        ))}
      </div>
    </section>
  );
}
