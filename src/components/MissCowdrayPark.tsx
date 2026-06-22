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
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const subtitleX = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      id="miss-cowdray-park"
      ref={containerRef}
      className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40"
      style={{ opacity: sectionOpacity, filter: sectionBlur }}
    >
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16 lg:mb-20 max-w-3xl"
          style={{ y: titleY }}
        >
          <p className="text-ivory-white/40 text-xs tracking-[0.3em] uppercase mb-6">Our Flagship Platform</p>
          <motion.h2
            style={{ x: subtitleX }}
            className="text-ivory-white text-[4rem] md:text-[6rem] lg:text-[7rem] font-light leading-[0.85] tracking-[-0.04em] mb-2"
          >
            MISS
          </motion.h2>
          <motion.h2
            style={{ x: subtitleX }}
            className="text-luxury-gold text-[4rem] md:text-[6rem] lg:text-[7rem] font-semibold leading-[0.85] tracking-[-0.04em]"
          >
            COWDRAY PARK
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-2xl text-ivory-white text-base md:text-lg leading-relaxed mb-12"
        >
          <p>
            A transformative platform designed to nurture confidence, leadership, talent, self-expression, and personal growth among young women.
          </p>
          <p className="mt-6 text-ivory-white/50">
            Participants become ambassadors of change, representing their community with grace, intelligence, and purpose.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y: imageY }}
          >
            <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
              <motion.img
                src={missImages[0].url}
                alt={missImages[0].alt}
                className="w-full h-auto object-contain"
                loading="lazy"
                initial={{ scale: 1.08 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          <div className="grid gap-8">
            {missImages.slice(1).map((item, index) => (
              <motion.div
                key={item.alt}
                className="relative w-full overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + index * 0.05, duration: 0.8 }}
              >
                <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
                  <motion.img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    initial={{ scale: 1.08 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
