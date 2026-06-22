import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { mongileMoyoFounder } from '../assets/images';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-150px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.35, 1, 1, 0.4]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ['8px', '0px', '0px', '8px']);
  const sectionScale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-48"
      style={{ opacity: sectionOpacity, filter: sectionBlur, scale: sectionScale }}
    >
      <div className="container-wide h-full">
        <div className="grid gap-8 lg:gap-20 lg:grid-cols-[1fr_1.3fr] items-stretch min-h-[70vh]">
          {/* Founder Image - Dominates the left */}
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-ivory-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.img 
              src={mongileMoyoFounder} 
              alt="Founder Mongile Moyo" 
              className="w-full h-full object-cover"
              style={{ scale: imageScale }}
            />
            <div className="pointer-events-none absolute inset-0 border border-ivory-white/10" />
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            className="relative flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div>
              <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6">Founder & Vision</p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-[-0.04em] text-ivory-white mb-8"
              >
                Mongile Moyo
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em] text-luxury-gold mb-10"
              >
                Founder & Executive Director
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
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

      {/* Mobile Image Layout */}
      <div className="lg:hidden mt-12 overflow-hidden">
        <div className="relative">
          <img src={mongileMoyoFounder} alt="Founder Mongile Moyo" className="w-full h-auto object-cover rounded-[24px]" />
        </div>
      </div>
    </motion.section>
  );
}
