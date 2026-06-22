import { Variants } from 'framer-motion';

/**
 * UNIFIED ANIMATION SYSTEM
 * All animations follow consistent principles:
 * - Use only: fade, translate, scale, blur
 * - Timings: 0.6s-1.0s for most animations
 * - Easing: easeOut for entrance, easeInOut for scroll
 * - No rotation, bounce, or excessive motion
 */

// ============================================
// SECTION REVEALS (Signature entrance)
// ============================================

export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// ============================================
// TEXT ANIMATIONS (Line by line)
// ============================================

export const headingLineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: i * 0.15, // Stagger between lines
    },
  }),
};

export const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// ============================================
// IMAGE ANIMATIONS (Cinematic reveals)
// ============================================

export const imageRevealVariants: Variants = {
  hidden: {
    scale: 1.08,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

// ============================================
// CARD ANIMATIONS (Program cards, gallery items)
// ============================================

export const cardEnterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// ============================================
// MENU ANIMATIONS (iPhone-inspired)
// ============================================

export const mobileMenuVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

export const menuBackdropVariants: Variants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(12px)',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.3 } },
};

export const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i * 0.08, // Elegant stagger
    },
  }),
};

// ============================================
// NAVBAR ANIMATIONS (Scroll-based)
// ============================================

export const navbarScrollVariants = {
  initial: {
    backgroundColor: 'rgba(10, 10, 10, 0)',
    backdropFilter: 'blur(0px)',
  },
  scrolled: {
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(12px)',
  },
};

export const navLogoVariants = {
  initial: {
    scale: 1,
  },
  scrolled: {
    scale: 0.9,
  },
};

export const navHeightVariants = {
  initial: {
    height: '5rem', // 80px
  },
  scrolled: {
    height: '4rem', // 64px
  },
};

// ============================================
// SCROLL STORYTELLING
// ============================================

export const getScrollStorytellingVariants = (
  scrollYProgress: any,
  isCurrentSection: boolean
) => {
  if (isCurrentSection) {
    // Current section comes into focus
    return {
      opacity: scrollYProgress,
      filter: scrollYProgress.get() < 0.2 ? 'blur(10px)' : 'blur(0px)',
    };
  } else {
    // Previous section fades out and blurs
    return {
      opacity: 1 - scrollYProgress,
      filter: 'blur(3px)',
    };
  }
};

// ============================================
// GALLERY ANIMATIONS
// ============================================

export const galleryImageVariants = {
  active: {
    opacity: 1,
    scale: 1,
  },
  inactive: {
    opacity: 0.6,
    scale: 0.98,
  },
};

export const galleryTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

// ============================================
// CONTAINER & STAGGER
// ============================================

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ============================================
// STANDARD EASING
// ============================================

export const easingPresets = {
  standard: 'easeOut',
  smooth: 'easeInOut',
  snappy: 'easeOut',
};

// ============================================
// STANDARD DURATIONS (in seconds)
// ============================================

export const durationPresets = {
  fast: 0.4,
  standard: 0.6,
  slow: 0.8,
  verySlow: 1.0,
};
