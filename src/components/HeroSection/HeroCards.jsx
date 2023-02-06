import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { controls } from "../WhySection/CardsWhy";
import Card1 from "./Hero_Illustration_Card-1.svg";
import Card2 from "./Hero_Illustration_Card-2.svg";
import Card3 from "./Hero_Illustration_Card-3.svg";
import Card4 from "./Hero_Illustration_Card-4.svg";
const Container = styled(motion.div)`
  position: absolute;
  align-self: flex-end;
  display: flex;
  top: 1rem;
  
  flex-direction: column;
`;
const Image4 = styled(motion.img)`
  position: relative;
  width: 74%;
  bottom: 71.5rem;
    left: 3rem;
  -webkit-align-self: end;
  -ms-flex-item-align: end;
  align-self: end;
  z-index: 2;
  animation: floating 2.1s ease-in-out infinite;
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
  } ;
  @media (max-width: 768px) {
    bottom: 67rem;
    width: 82%;
    
  }
`;
const Image3 = styled(motion.img)`
  position: relative;
  width: 33rem;
  bottom: 41rem;
  z-index: -1;
  animation: floating 2.2s ease-in-out infinite;
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
  } ;
  @media (max-width: 768px) {
    bottom: 37rem;
    left: -1rem;
  }
`;
const Image2 = styled(motion.img)`
  position: relative;
  top: -20rem;
    width: 119%;
    left: -3rem;
  animation: floating 3.3s ease-in-out infinite;
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
  z-index: 3;
  @media (max-width: 768px) {
    width: 122%;
  }
`;
const Image1 = styled(motion.img)`
  position: relative;
  align-self: center;
  width: 80%;
  z-index: 4;
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
  } ;
  @media (max-width: 768px) {
    top: -5rem;
  }
`;
export default function HeroCards() {
  
  return (
    <Container >
      <Image1 custom={1.2}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: true }} src={Card1} />
      <Image2 custom={0.9}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: true }}  src={Card2} />
      <Image3 custom={0.6}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: true }} src={Card3} />
      <Image4 custom={0.3}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: true }} src={Card4} />
    </Container>
  );
}
