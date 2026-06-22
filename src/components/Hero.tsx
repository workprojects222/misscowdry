import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroImage } from '../assets/images';
import { headingLineVariants, paragraphVariants } from '../animations';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = heroImage;
    document.head.appendChild(preloadLink);

    const image = new Image();
    image.src = heroImage;
    image.onload = () => setIsLoaded(true);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
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
      className="relative min-h-screen h-screen overflow-hidden"
      style={{ opacity: sectionOpacity, filter: sectionBlur }}
    >
      <motion.div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Youth empowerment"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
          style={{ y: imageY, scale: imageScale, opacity: isLoaded ? 1 : 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          loading="eager"
          decoding="async"
        />
      </motion.div>

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
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xs md:text-sm tracking-[0.3em] uppercase text-ivory-white/70 mb-4"
                >
                  Bulawayo, Zimbabwe
                </motion.p>

                <div className="mb-4 overflow-hidden">
                  <motion.h1
                    variants={headingLineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="text-[clamp(2.2rem,6vw,6rem)] font-light leading-[0.82] tracking-[-0.04em]"
                  >
                    COWDRAY PARK
                  </motion.h1>
                </div>

                <div className="mb-10 overflow-hidden">
                  <motion.h2
                    variants={headingLineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="text-[clamp(1.8rem,5vw,4.2rem)] font-semibold leading-[0.82] tracking-[-0.04em]"
                  >
                    FOUNDATION
                  </motion.h2>
                </div>

                <motion.p
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-base md:text-lg leading-relaxed text-ivory-white/85 mb-10"
                >
                  Empowering young people through leadership development, talent nurturing, and community engagement initiatives.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
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
