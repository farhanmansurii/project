import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Donut from "./Why_Shapes_Ellipse.svg";
import Bar from "./Why_Shapes_Rectangle.svg";

const controls = {
  initial: {
    opacity: 1,
    x: -200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const DonutDiv = styled(motion.img)`
  position: relative;
  left: -53%;
  top: -120px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    top: -3rem;
  }
`;
const BarDiv = styled(motion.img)`
  position: relative;
  width: 62%;
  fill: orange;
  bottom: -130px;
  left: -48%;
  @media (max-width: 768px) {
    width: 100%;
    top: 2rem;
    left: -13rem;
  }
`;
const ShapesContainer = styled(motion.div)`
  position: absolute;
  width: 80%;
`;
export default function ShapesWhy() {
  return (
    <ShapesContainer
      style={{ position: "absolute", width: "fit-content" }}
      custom={1}
      initial={controls.initial}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      }}
      viewport={{ once: false }}
    >
      <BarDiv src={Bar} style={{ transform: "rotate(-0.33turn)" }} />
      <DonutDiv
        src={Donut}
        custom={1}
        initial={controls.initial}
        whileInView={controls.animate}
        viewport={{ once: false }}
      />
    </ShapesContainer>
  );
}
