import { motion } from 'framer-motion';
import { heroImage } from '../assets/images';

export default function Hero() {
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
    <section id="home" className="relative h-screen overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Youth empowerment"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="relative z-10 h-full">
        <div className="container-wide h-full">
          <div className="grid h-full grid-cols-1 lg:grid-cols-[40%_60%]">
            <div className="flex items-center px-6 md:px-12 lg:px-0">
              <div className="max-w-[550px] text-white">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xs md:text-sm tracking-[0.3em] uppercase text-warm/70 mb-4"
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
                  className="text-base md:text-lg leading-relaxed text-white/85 mb-10"
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
                    className="w-full rounded-none border border-white/20 bg-lime px-8 py-4 text-sm uppercase tracking-[0.15em] text-charcoal transition hover:brightness-95"
                  >
                    Explore Programs
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="w-full rounded-none border border-white/20 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:border-lime hover:text-lime"
                  >
                    Join Now
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
