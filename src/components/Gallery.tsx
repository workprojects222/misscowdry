import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { galleryImages } from '../assets/images';

const slideTransition = {
  duration: 0.75,
  ease: 'easeInOut',
};

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const imageCount = galleryImages.length;
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % imageCount);
  };

  const previousSlide = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    intervalRef.current = window.setInterval(nextSlide, 4000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipePower = Math.abs(info.offset.x) * info.velocity.x;
    if (swipePower < 1000) {
      return;
    }

    if (info.offset.x > 0) {
      previousSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-20 md:py-24 lg:py-32 bg-charcoal overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-wide mb-12 md:mb-16 lg:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6"
        >
          Gallery
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-[clamp(1.8rem,5vw,7rem)] font-light tracking-[-0.02em] text-ivory-white mb-4">
            Moments of
          </h2>
          <h2 className="text-[clamp(1.8rem,5vw,7rem)] font-semibold tracking-[-0.02em] text-luxury-gold">
            Transformation
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-x-hidden">
        <div className="relative overflow-hidden rounded-[32px] border border-ivory-white/10 bg-rich-black min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] max-h-[82vh]">
          {galleryImages.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={image.alt}
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={
                  isActive
                    ? { opacity: 1, x: 0, zIndex: 2 }
                    : { opacity: 0, x: direction > 0 ? -40 : 40, zIndex: 1 }
                }
                transition={slideTransition}
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={handleDragEnd}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
            );
          })}

          <motion.button
            type="button"
            onClick={previousSlide}
            whileHover={{ scale: 1.05, x: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="pointer-events-auto absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-12 w-36 items-center justify-start gap-3 px-3 text-ivory-white sm:h-14 sm:w-48 focus:outline-none"
            aria-label="Previous slide"
          >
            <span className="text-base uppercase tracking-[0.3em] sm:text-lg">⟵</span>
            <span className="h-px w-24 bg-ivory-white/70 transition-all duration-300" />
          </motion.button>

          <motion.button
            type="button"
            onClick={nextSlide}
            whileHover={{ scale: 1.05, x: 6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="pointer-events-auto absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-12 w-40 items-center justify-end gap-3 px-3 text-ivory-white sm:h-14 sm:w-52 focus:outline-none"
            aria-label="Next slide"
          >
            <span className="h-px w-24 bg-ivory-white/70 transition-all duration-300" />
            <span className="text-base uppercase tracking-[0.3em] sm:text-lg">⟶</span>
          </motion.button>

          <div className="pointer-events-none absolute right-6 bottom-6 text-right text-xs tracking-[0.45em] uppercase text-ivory-white/70">
            {String(activeIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
}
