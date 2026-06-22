import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { programImages } from '../assets/images';

const programs = [
  {
    id: 1,
    number: '01',
    title: 'Youth Empowerment',
    label: 'PROGRAM 01',
    description:
      'Equipping young people with the skills, confidence, and opportunities they need to lead, create, and inspire.',
    impact: 'A new generation of leaders gains visible presence, agency, and direction.',
    image: programImages[0],
  },
  {
    id: 2,
    number: '02',
    title: 'Talent Nurturing',
    label: 'PROGRAM 02',
    description:
      'Discovering and refining creative voices across arts, music, sport, and digital expression.',
    impact: 'Individual talent is amplified through mentorship and high-impact exposure.',
    image: programImages[1],
  },
  {
    id: 3,
    number: '03',
    title: 'Community Upliftment',
    label: 'PROGRAM 03',
    description:
      'Activating community projects that connect young people with purpose, progress, and public pride.',
    impact: 'Local neighborhoods are transformed by bold youth-driven initiatives.',
    image: programImages[2],
  },
  {
    id: 4,
    number: '04',
    title: 'Social Impact & Youth Rehabilitation',
    label: 'PROGRAM 04',
    description:
      'Supporting at-risk youth with mentorship, counseling, and skills that change life trajectories.',
    impact: 'Young people find direction, stability, and renewed confidence in every step.',
    image: programImages[3],
  },
  {
    id: 5,
    number: '05',
    title: 'Patriotism & Leadership Development',
    label: 'PROGRAM 05',
    description:
      'Cultivating responsible citizens anchored in pride, purpose, and community leadership.',
    impact: 'Future leaders emerge with clarity, commitment, and cultural influence.',
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
  const isInView = useInView(blockRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.35, 1, 1, 0.45]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['10px', '0px', '0px', '10px']);
  const sectionScale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // Alternate layout: odd programs have image left, even have image right
  const isImageLeft = index % 2 === 0;

  return (
    <motion.section
      ref={blockRef}
      className="relative py-16 md:py-20 lg:py-24 min-h-fit lg:min-h-[60vh]"
      style={{ opacity: sectionOpacity, filter: sectionBlur, scale: sectionScale }}
    >
      <div className="container-wide h-full">
        <div
          className={`grid gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2 items-stretch ${
            isImageLeft ? 'lg:auto' : 'lg:auto'
          }`}
        >
          {/* Image Container */}
          <motion.div
            className={`relative overflow-hidden rounded-[32px] border border-ivory-white/10 min-h-[400px] md:min-h-[500px] lg:min-h-[550px] ${
              isImageLeft ? '' : 'lg:order-2'
            }`}
            initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <motion.img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ scale: imageScale }}
            />
            <div className="pointer-events-none absolute inset-0 border border-ivory-white/10" />
          </motion.div>

          {/* Content Container */}
          <motion.div
            className={`relative flex flex-col justify-center ${isImageLeft ? '' : 'lg:order-1'}`}
            initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <div>
              {/* Program Number as design element */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <span className="text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] text-ivory-white/8 leading-none">
                  {program.number}
                </span>
              </motion.div>

              {/* Program Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-ivory-white/50 text-xs tracking-[0.35em] uppercase mb-4"
              >
                {program.label}
              </motion.p>

              {/* Program Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="text-4xl md:text-5xl lg:text-6xl leading-[0.9] font-semibold tracking-[-0.03em] text-ivory-white mb-8"
              >
                {program.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg leading-relaxed text-ivory-white/70 mb-8"
              >
                {program.description}
              </motion.p>

              {/* Impact statement - larger, bolder */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-luxury-gold mb-10"
              >
                {program.impact}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button
                  type="button"
                  onClick={() => (window.location.hash = 'coming-soon')}
                  className="inline-flex items-center rounded-none border border-ivory-white/20 bg-luxury-gold px-8 py-4 text-sm uppercase tracking-[0.22em] text-rich-black transition hover:bg-champagne-gold"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="programs"
      ref={containerRef}
      className="relative bg-charcoal"
      initial={{ opacity: 0.4 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <div className="container-wide py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6">Our Programs</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-ivory-white mb-6">
            Transforming young lives through bold, intentional programs.
          </h2>
          <p className="text-ivory-white/70 text-base md:text-lg leading-relaxed">
            Every program is designed with purpose—uniting images, stories, and ambition to empower youth into leaders, creators, and agents of change.
          </p>
        </motion.div>
      </div>

      {/* Program Blocks */}
      <div className="space-y-8 md:space-y-12 lg:space-y-20">
        {programs.map((program, index) => (
          <ProgramBlock key={program.id} program={program} index={index} />
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-8 md:h-12 lg:h-16" />
    </motion.section>
  );
}
