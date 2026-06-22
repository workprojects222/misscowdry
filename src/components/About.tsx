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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden bg-warm py-24 md:py-32 lg:py-40">
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
              <img src={aboutImage} alt="Founder Mongile Moyo" className="w-full h-auto object-contain" />
            </div>
            <p className="mt-6 text-sm text-charcoal/70">Mongile Moyo — Founder & CEO</p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ y: y2 }}
          >
            <div className="max-w-xl">
              <p className="text-charcoal/50 text-xs tracking-[0.3em] uppercase mb-6">About Us</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-[-0.04em] text-charcoal mb-10">
                Who We Are
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Cowdray Park Foundation was founded by Mongile Moyo and is a youth-led organization based in Bulawayo, Zimbabwe. Under her leadership, we empower young people to become agents of change through leadership, talent development, and community engagement.
              </p>
              <p className="text-charcoal/70 text-base leading-relaxed mb-10">
                Our mission is to create inclusive programs that build confidence, deepen community connection, and prepare youth for future leadership.
              </p>

              <div className="space-y-8">
                {features.map((item, index) => (
                  <div key={item} className="flex gap-6 items-start">
                    <span className="min-w-[3rem] text-4xl md:text-5xl font-semibold tracking-[0.15em] text-charcoal/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-charcoal">
                      {item}
                    </p>
                  </div>
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
    </section>
  );
}
