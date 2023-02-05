export const controls = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
};
