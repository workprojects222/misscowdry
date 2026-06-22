import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Miss Cowdray', href: '#miss-cowdray-park' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer ref={containerRef} className="relative bg-charcoal py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16 md:mb-24">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-warm text-[2rem] md:text-[3rem] lg:text-[4rem] font-light leading-[1] tracking-[-0.02em] mb-3">
              COWDRAY PARK
            </h2>
            <h2 className="text-lime text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold leading-[1] tracking-[-0.02em] mb-8">
              FOUNDATION
            </h2>
            <p className="text-warm/50 text-base leading-relaxed max-w-md">
              Building the next generation of leaders through youth empowerment
              and community transformation in Bulawayo, Zimbabwe.
            </p>
          </motion.div>

          {/* Right - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <p className="text-warm/40 text-xs tracking-[0.2em] uppercase mb-6">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-warm/60 hover:text-lime transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-warm/40 text-xs tracking-[0.2em] uppercase mb-6">Contact</p>
              <ul className="space-y-3 text-warm/60 text-sm">
                <li>Cowdray Park</li>
                <li>Bulawayo, Zimbabwe</li>
                <li className="pt-2">info@cowdrayparkfoundation.org</li>
              </ul>

              <div className="flex gap-3 mt-8">
                {['IG', 'FB', 'TW'].map((social, index) => (
                  <motion.button
                    key={social}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="w-10 h-10 border border-warm/20 flex items-center justify-center text-warm/50 hover:text-warm hover:border-warm/40 transition-colors text-xs"
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-warm/10 flex flex-col md:flex-row justify-between items-start gap-4"
        >
          <p className="text-warm/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Cowdray Park Foundation.
          </p>
          <p className="text-warm/30 text-xs tracking-wider">
            build and designed by Takudzwa Mbano.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
