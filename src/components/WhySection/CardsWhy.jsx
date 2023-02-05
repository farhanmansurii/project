import { motion } from "framer-motion";
import styled from "styled-components";
import Why1 from "./Why_Illustration-1.svg";
import Why2 from "./Why_Illustration-2.svg";

const Container = styled.div`
  overflow: hidden;
  position: relative;

  width: 60rem;
  height: 50rem;
  @media (max-width: 768px) {
    width: 100%;

    height: 30rem;
    top: 1px;
  }
`;
const Image1 = styled(motion.img)`
  position: absolute;
  width: 35rem;
  left: 7rem;
  top: 4rem;
  z-index: 1;

  animation: floating 2s ease-in-out infinite;
  transform: translateY(0);

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export const controls = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.5,
    },
  }),
};
const Image2 = styled(motion.img)`
  z-index: 2;
  height: 35rem;
  left: 9rem;
  width: 100%;
  top: 15rem;
  animation: floating 2s ease-in-out infinite;
  transform: translateY(0);

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(7px);
    }
    100% {
      transform: translateY(0);
    }
  }
  position: absolute;
  @media (max-width: 768px) {
    width: 20rem;
    top: 0;
    left: 4rem;
  }
`;
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
function CardsWhy() {
  return (
    <Container>
      <Image2
        custom={1}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: false }}
        src={Why2}
      />
      <Image1
        custom={1.2}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: false }}
        src={Why1}
      />
    </Container>
  );
}

export default CardsWhy;
