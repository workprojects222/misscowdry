import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { missCowdrayImages } from '../assets/images';

const missImages = missCowdrayImages;

export default function MissCowdrayPark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-150px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.35]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['8px', '0px', '0px', '8px']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <motion.section
      id="miss-cowdray-park"
      ref={containerRef}
      className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-48"
      style={{ opacity: sectionOpacity, filter: sectionBlur }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 md:mb-20 lg:mb-24 max-w-3xl"
        >
          <p className="text-ivory-white/40 text-xs tracking-[0.3em] uppercase mb-8">Flagship Platform</p>
          
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-[-0.04em] text-ivory-white"
            >
              Miss Cowdray Park
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em] text-luxury-gold mb-8"
          >
            A Transformative Platform for Young Women
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base md:text-lg leading-relaxed text-ivory-white/75 mb-6"
          >
            Miss Cowdray Park is designed to nurture confidence, leadership, and personal growth among young women. Participants become ambassadors of change, representing their community with grace, intelligence, and purpose.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed text-ivory-white/75"
          >
            Through competitions, mentorship, and public engagement, this platform elevates young women's voices and celebrates their potential to lead change.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:gap-8 lg:gap-10 lg:grid-cols-[1.5fr_1fr] min-h-[60vh] md:min-h-[70vh]">
          {/* Featured Image - Large left */}
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-ivory-white/10 row-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <motion.img
              src={missImages[0].url}
              alt={missImages[0].alt}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ scale: imageScale }}
            />
            <div className="pointer-events-none absolute inset-0 border border-ivory-white/10" />
          </motion.div>

          {/* Right column images */}
          {missImages.slice(1, 3).map((item, index) => (
            <motion.div
              key={item.alt}
              className="relative overflow-hidden rounded-[32px] border border-ivory-white/10"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35 + index * 0.1 }}
            >
              <motion.img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ scale: imageScale }}
              />
              <div className="pointer-events-none absolute inset-0 border border-ivory-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
