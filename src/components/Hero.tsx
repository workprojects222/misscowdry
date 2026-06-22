import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroImage } from '../assets/images';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.45]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.7, 1], ['0px', '0px', '8px']);
  const textLift = useTransform(scrollYProgress, [0, 1], [0, -28]);

  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      style={{ opacity: sectionOpacity, filter: sectionBlur }}
    >
      <motion.img
        src={heroImage}
        alt="Youth empowerment"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        style={{ y: imageY, scale: imageScale }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.24) 55%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="relative z-10 h-full">
        <div className="container-wide h-full">
          <div className="grid h-full grid-cols-1 lg:grid-cols-[40%_60%]">
            <div className="flex items-center px-6 md:px-12 lg:px-0">
              <motion.div style={{ y: textLift }} className="max-w-[550px] text-ivory-white">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xs md:text-sm tracking-[0.3em] uppercase text-ivory-white/70 mb-4"
                >
                  Bulawayo, Zimbabwe
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem] font-light leading-[0.82] tracking-[-0.04em] mb-4"
                >
                  COWDRAY PARK
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-semibold leading-[0.82] tracking-[-0.04em] mb-10"
                >
                  FOUNDATION
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base md:text-lg leading-relaxed text-ivory-white/85 mb-10"
                >
                  Empowering young people through leadership development, talent nurturing, and community engagement initiatives.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <button
                    onClick={scrollToPrograms}
                    className="w-full rounded-none border border-ivory-white/20 bg-luxury-gold px-8 py-4 text-sm uppercase tracking-[0.15em] text-rich-black transition hover:bg-champagne-gold"
                  >
                    Explore Programs
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="w-full rounded-none border border-ivory-white/20 bg-ivory-white/10 px-8 py-4 text-sm uppercase tracking-[0.15em] text-ivory-white transition hover:border-luxury-gold hover:text-luxury-gold"
                  >
                    Join Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
