import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { missCowdrayImages } from '../assets/images';

const missImages = missCowdrayImages;

export default function MissCowdrayPark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-150px' });

  return (
    <section id="miss-cowdray-park" ref={containerRef} className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16 lg:mb-20 max-w-3xl"
        >
          <p className="text-warm/40 text-xs tracking-[0.3em] uppercase mb-6">Our Flagship Platform</p>
          <h2 className="text-warm text-[4rem] md:text-[6rem] lg:text-[7rem] font-light leading-[0.85] tracking-[-0.04em] mb-2">
            MISS
          </h2>
          <h2 className="text-lime text-[4rem] md:text-[6rem] lg:text-[7rem] font-semibold leading-[0.85] tracking-[-0.04em]">
            COWDRAY PARK
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-2xl text-warm text-base md:text-lg leading-relaxed mb-12"
        >
          <p>
            A transformative platform designed to nurture confidence, leadership, talent, self-expression, and personal growth among young women.
          </p>
          <p className="mt-6 text-warm/50">
            Participants become ambassadors of change, representing their community with grace, intelligence, and purpose.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
              <img src={missImages[0].url} alt={missImages[0].alt} className="w-full h-auto object-contain" loading="lazy" />
            </div>
          </motion.div>

          <div className="grid gap-8">
            <motion.div
              className="relative w-full overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
                <img src={missImages[1].url} alt={missImages[1].alt} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              className="relative w-full overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
                <img src={missImages[2].url} alt={missImages[2].alt} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              className="relative w-full overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
                <img src={missImages[3].url} alt={missImages[3].alt} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
