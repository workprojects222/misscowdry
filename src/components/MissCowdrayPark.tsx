import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { missCowdrayImages } from '../assets/images';
import { headingLineVariants, paragraphVariants } from '../animations';

const missImages = missCowdrayImages;

export default function MissCowdrayPark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-150px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll storytelling: sharpen current, blur previous
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['3px', '0px', '0px', '3px']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <motion.section
      id="miss-cowdray-park"
      ref={containerRef}
      className="relative overflow-hidden bg-charcoal py-20 md:py-24 lg:py-32"
      style={{ opacity: sectionOpacity, filter: sectionBlur }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-10 md:mb-14 lg:mb-16 max-w-3xl space-y-4"
        >
          <motion.p 
            variants={paragraphVariants}
            className="text-ivory-white/40 text-xs tracking-[0.3em] uppercase"
          >
            Flagship Platform
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h2
              variants={headingLineVariants}
              custom={0}
              className="text-[clamp(1.8rem,5vw,7rem)] font-light leading-[0.9] tracking-[-0.04em] text-ivory-white"
            >
              Miss Cowdray Park
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em] text-luxury-gold"
          >
            A Transformative Platform for Young Women
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-base md:text-lg leading-relaxed text-ivory-white/75"
          >
            Miss Cowdray Park is designed to nurture confidence, leadership, and personal growth among young women. Participants become ambassadors of change, representing their community with grace, intelligence, and purpose.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-base md:text-lg leading-relaxed text-ivory-white/75"
          >
            Through competitions, mentorship, and public engagement, this platform elevates young women's voices and celebrates their potential to lead change.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-5 md:gap-6 lg:gap-8 lg:grid-cols-[1.4fr_1fr] min-h-[40vh] md:min-h-[52vh]">
          {/* Featured Image - Large left */}
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-ivory-white/10 row-span-2"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
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
              initial={{ scale: 1.08, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -4 }}
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
