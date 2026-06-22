import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Miss Cowdray', href: '#miss-cowdray-park' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const overlayVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const bgTextVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 0.05, scale: 1, transition: { duration: 0.8 } },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const contactVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const topLineVariants: Variants = {
  closed: { width: 32, y: 0, rotate: 0 },
  open: { width: 24, y: 8, rotate: 45 },
};

const bottomLineVariants: Variants = {
  closed: { width: 20, y: 10, rotate: 0, x: 0 },
  open: { width: 24, y: 2, rotate: -45, x: 0 },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-charcoal/95 backdrop-blur-sm py-5' : 'bg-transparent py-8'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="relative z-10"
            whileHover={{ opacity: 0.85 }}
          >
            <span className="text-lg font-semibold tracking-[0.3em] text-warm uppercase">CPF</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative group"
                whileHover={{ y: -1 }}
              >
                <span
                  className={`text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-lime'
                      : 'text-warm/70 hover:text-warm'
                  }`}
                >
                  {link.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-lime"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeSection === link.href.replace('#', '') ? '100%' : 0,
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="lg:hidden relative flex h-10 w-14 items-center justify-center"
            whileHover={isMobileMenuOpen ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.span
              className="absolute left-0 top-1/2 h-[1px] bg-white"
              variants={topLineVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              style={{ originX: 0 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-[1px] bg-white"
              variants={bottomLineVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              whileHover={!isMobileMenuOpen ? { x: -4 } : {}}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#0F0F0F]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              variants={bgTextVariants}
            >
              <span className="text-[clamp(10rem,22vw,16rem)] font-black uppercase tracking-[0.25em] text-white/5 leading-none">
                CPF
              </span>
            </motion.div>

            <div className="relative z-10 min-h-screen px-8 py-8 flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm tracking-[0.35em] uppercase text-warm/60">Menu</span>
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative flex h-10 w-14 items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <motion.span
                    className="absolute left-0 top-1/2 h-[1px] bg-white"
                    animate={{ width: 24, y: 8, rotate: 45 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{ originX: 0 }}
                  />
                  <motion.span
                    className="absolute left-0 top-1/2 h-[1px] bg-white"
                    animate={{ width: 24, y: 2, rotate: -45 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{ originX: 0 }}
                  />
                </motion.button>
              </div>

              <motion.div className="mt-16 flex-1 grid gap-8" initial="hidden" animate="visible" variants={overlayVariants}>
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="group relative text-left text-[clamp(4rem,10vw,6.5rem)] font-extralight uppercase tracking-[0.25em] leading-[0.85] text-white"
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <span className="block">{link.name}</span>
                    <motion.span
                      className="absolute left-0 top-1/2 h-[1px] bg-lime"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </motion.button>
                ))}
              </motion.div>

              <motion.div className="mt-auto pt-8 text-warm/60 text-sm uppercase tracking-[0.35em]" variants={contactVariants}>
                <p className="mb-2">contact@cowdrayparkfoundation.org</p>
                <p>+263 123 456 789</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
