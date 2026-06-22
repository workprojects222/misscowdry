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

const sheetVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: { y: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(8px)',
    transition: { duration: 0.35 },
  },
  exit: { opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.3 } },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.03, duration: 0.35, ease: 'easeOut' },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-sm py-3.5' : 'bg-transparent py-4'}`}
      >
        <div className="px-4 sm:px-6 lg:px-16 flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="relative z-10"
            whileHover={{ opacity: 0.85 }}
          >
            <span className="text-sm font-semibold tracking-[0.35em] text-ivory-white uppercase">CPF</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative group"
                whileHover={{ y: -1 }}
              >
                <span
                  className={`text-[0.65rem] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${activeSection === link.href.replace('#', '') ? 'text-luxury-gold' : 'text-ivory-white/70 hover:text-ivory-white'}`}
                >
                  {link.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-luxury-gold"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeSection === link.href.replace('#', '') ? '100%' : 0,
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.28 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden relative flex h-10 w-10 items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-ivory-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-charcoal/40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 w-full rounded-t-[32px] bg-charcoal border-t border-ivory-white/10"
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-6 max-h-[85vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xs tracking-[0.35em] uppercase text-ivory-white font-semibold">Navigation</h2>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative flex h-8 w-8 items-center justify-center text-ivory-white/60 hover:text-ivory-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <motion.div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-base md:text-lg font-medium text-ivory-white hover:bg-ivory-white/5 transition-colors duration-200 flex items-center justify-between group"
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      whileHover={{ x: 4 }}
                    >
                      <span>{link.name}</span>
                      <span className="text-ivory-white/40 group-hover:text-luxury-gold transition-colors">→</span>
                    </motion.button>
                  ))}
                </motion.div>

                <div className="mt-8 pt-6 border-t border-ivory-white/10">
                  <p className="text-xs tracking-[0.2em] uppercase text-ivory-white/50 mb-4">Contact</p>
                  <div className="space-y-2 text-sm text-ivory-white/70">
                    <p>contact@cowdrayparkfoundation.org</p>
                    <p>+263 123 456 789</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
