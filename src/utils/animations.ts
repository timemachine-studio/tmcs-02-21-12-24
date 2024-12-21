export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

export const textGlowStyle = {
  textShadow: `
    0 0 20px rgba(255,255,255,0.4),
    0 0 40px rgba(255,255,255,0.2),
    0 0 60px rgba(255,255,255,0.1)
  `,
  WebkitTextStroke: '1px rgba(255,255,255,0.1)'
};

export const wordAnimationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  },
  word: {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  },
};