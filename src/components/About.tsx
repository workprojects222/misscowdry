import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { aboutImage } from '../assets/images';
import { headingLineVariants, paragraphVariants, imageRevealVariants } from '../animations';

export default function About() {
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
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-charcoal py-16 md:py-20 lg:py-28"
      style={{ opacity: sectionOpacity, filter: sectionBlur }}
    >
      <div className="container-wide h-full">
        <div className="grid gap-6 lg:gap-14 lg:grid-cols-[1fr_1.3fr] items-center min-h-fit">
          {/* Founder Image - Dominates the left */}
          <motion.div
            className="relative overflow-hidden rounded-[28px] border border-ivory-white/10"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
          >
            <motion.img 
              src={aboutImage} 
              alt="Founder Mongile Moyo" 
              className="w-full h-full object-cover"
              style={{ scale: imageScale }}
            />
            <div className="pointer-events-none absolute inset-0 border border-ivory-white/10" />
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            className="relative flex flex-col justify-center"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6"
              >
                Founder & Vision
              </motion.p>
              
              <div className="mb-8 overflow-hidden">
                <motion.h2
                  variants={headingLineVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={0}
                  className="text-[clamp(1.8rem,5vw,6rem)] font-light leading-[0.95] tracking-[-0.04em] text-ivory-white"
                >
                  Mongile Moyo
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em] text-luxury-gold mb-10"
              >
                Founder & Executive Director
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="text-ivory-white/75 text-base md:text-lg leading-relaxed mb-8"
              >
                Mongile Moyo founded Cowdray Park Foundation to transform the future of young people in Bulawayo, Zimbabwe. Her vision is rooted in belief—that every young person deserves the tools, mentorship, and platform to lead.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-ivory-white/75 text-base md:text-lg leading-relaxed mb-12"
              >
                Through bold programs in youth empowerment, talent development, and community upliftment, she is building a movement that centers young voices in shaping Zimbabwe's future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6 pt-8 border-t border-ivory-white/10"
              >
                <div>
                  <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-3">Mission</p>
                  <p className="text-ivory-white text-lg font-semibold leading-tight">
                    Empower young people to become agents of change through leadership, creativity, and community impact.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
