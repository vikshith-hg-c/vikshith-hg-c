// Motion animation utilities for Framer Motion
export const slideInFromLeft = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

export const slideInFromRight = (delay: number) => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

export const slideInFromTop = (delay: number) => {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

export const slideInFromBottom = (delay: number) => {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = (delay: number) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
  };
};

export const scaleIn = (delay: number) => {
  return {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};
