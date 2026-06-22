import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { aboutImage, aboutAccentImage } from '../assets/images';

const features = ['Youth Empowerment', 'Talent Nurturing', 'Community Impact', 'Leadership Training'];

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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40"
      style={{ opacity: sectionOpacity, filter: sectionBlur, scale: sectionScale }}
    >
      <div className="container-wide">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.6fr_1fr] items-center">
          <motion.div
            className="hidden lg:block relative max-w-full overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: y1 }}
          >
            <div className="relative left-1/2 w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:-translate-x-0">
              <motion.img src={aboutImage} alt="Founder Mongile Moyo" className="w-full h-auto object-contain" />
            </div>
            <p className="mt-6 text-sm text-ivory-white/70">Mongile Moyo — Founder & CEO</p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ y: y2 }}
          >
            <div className="max-w-xl">
              <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6">About Us</p>
              <div className="overflow-hidden mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-2"
                >
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-[-0.04em] text-ivory-white">Who</span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-[-0.04em] text-ivory-white">We</span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-[-0.04em] text-ivory-white">Are</span>
                </motion.div>
              </div>
              <p className="text-ivory-white/70 text-lg leading-relaxed mb-6">
                Cowdray Park Foundation was founded by Mongile Moyo and is a youth-led organization based in Bulawayo, Zimbabwe. Under her leadership, we empower young people to become agents of change through leadership, talent development, and community engagement.
              </p>
              <p className="text-ivory-white/70 text-base leading-relaxed mb-10">
                Our mission is to create inclusive programs that build confidence, deepen community connection, and prepare youth for future leadership.
              </p>

              <div className="space-y-8">
                {features.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + index * 0.08, duration: 0.6 }}
                    className="flex gap-6 items-start"
                  >
                    <span className="min-w-[3rem] text-4xl md:text-5xl font-semibold tracking-[0.15em] text-ivory-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-ivory-white">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden mt-10 overflow-hidden">
        <div className="relative left-1/2 w-[100vw] -translate-x-1/2">
          <img src={aboutImage} alt="Founder Mongile Moyo" className="w-full h-auto object-contain" />
        </div>
      </div>

      <motion.div
        className="hidden md:block absolute bottom-10 right-6 w-40 h-56"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <img src={aboutAccentImage} alt="Community accent" className="w-full h-auto object-contain" />
      </motion.div>
    </motion.section>
  );
}
