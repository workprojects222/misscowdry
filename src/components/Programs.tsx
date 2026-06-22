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
  const isInView = useInView(blockRef, { once: true, margin: '-150px' });
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.35, 1, 1, 0.45]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['10px', '0px', '0px', '10px']);
  const sectionScale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const textRise = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <motion.section
      ref={blockRef}
      className="relative min-h-[80vh] py-20 lg:py-24"
      style={{ opacity: sectionOpacity, filter: sectionBlur, scale: sectionScale }}
    >
      <div className="container-wide h-full">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[45%_55%] items-start">
          <motion.div
            className="relative flex flex-col justify-center rounded-[32px] border border-ivory-white/10 bg-ivory-white/5 p-8 md:p-12 lg:p-16 xl:p-20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ y: textRise }}
          >
            <span className="text-ivory-white/50 text-xs tracking-[0.35em] uppercase mb-6">{program.label}</span>
            <div className="relative overflow-hidden">
              <span className="pointer-events-none absolute right-0 top-0 text-[7rem] md:text-[9rem] lg:text-[10rem] leading-none font-semibold text-ivory-white/10 select-none">
                {program.number}
              </span>
              <motion.h3
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="relative text-5xl md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] leading-[0.88] font-semibold tracking-[-0.05em] text-ivory-white max-w-xl"
              >
                {program.title}
              </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 text-base md:text-lg leading-relaxed text-ivory-white/70 max-w-xl"
            >
              {program.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-xl md:text-2xl font-semibold leading-tight text-ivory-white"
            >
              {program.impact}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <button
                type="button"
                onClick={() => (window.location.hash = 'coming-soon')}
                className="inline-flex items-center rounded-none border border-ivory-white/20 bg-luxury-gold px-8 py-4 text-sm uppercase tracking-[0.22em] text-rich-black transition hover:bg-champagne-gold"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[80vh] min-h-[80vh] overflow-hidden rounded-[32px] border border-ivory-white/10 bg-rich-black/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <motion.img
              src={program.image}
              alt={program.title}
              className="absolute inset-0 w-full h-full object-contain object-center"
              loading="lazy"
              style={{ scale: imageScale }}
            />
            <div className="pointer-events-none absolute inset-0 border border-ivory-white/10" />
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
      <div className="container-wide py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6">Our Programs</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-ivory-white mb-4">
            A premium editorial approach to youth development.
          </h2>
          <p className="text-ivory-white/70 text-base md:text-lg leading-relaxed">
            Every program is presented like a feature story—bold, purposeful, and designed to elevate the narrative of young leaders, creators, and changemakers.
          </p>
        </motion.div>
      </div>

      <div className="container-wide space-y-20">
        {programs.map((program, index) => (
          <ProgramBlock key={program.id} program={program} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
