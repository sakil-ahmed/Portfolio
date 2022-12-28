import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    ease: easeInOut,
  },
};

export default fadeInUp;
