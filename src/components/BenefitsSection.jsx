import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Benefits_Icon_Collaborate from "../assets/Benefits/Benefits_Icon_Collaborate.svg";
import Benefits_Icon_Priotitize from "../assets/Benefits/Benefits_Icon_Priotitize.svg";
import Benefits_Icon_Track from "../assets/Benefits/Benefits_Icon_Track.svg";

import { Text } from "./SignInPage/Styles";

const controls = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 1.3,
      duration: 0.4,
    },
  }),
};

const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnDiv = styled(motion.div)`
  margin: 10px;
  margin: 1rem;
  text-align: center;
  @media (max-width: 768px) {
  }
`;

const BenefitText = styled(motion.div)`
  font-size: 25px;
  font-family: Rubik;
  text-align: center;
  margin: 1rem;
  letter-spacing: 0px;
  color: #1e1c24;
  opacity: 1;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0.5rem;
  }
`;

const BenefitSubtext = styled(motion.div)`
  text-align: center;
  width: 310px;
  height: 78px;
  font-size: 16px;
  font-family: Poppins;
  font: normal;
  color: #b1aaaa;
  opacity: 1;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const BenefitsContainer = styled(motion.div)`
  width: 100%;
  height: 120vh;
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    font: 16px Rubik;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

const BenefitsTitle = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Rubik;
  width: 787px;
  height: 132px;
  font-weight: bold;
  line-height: normal;
  color: #1e1c24;
  opacity: 1;
  overflow-wrap: break-word;
  width: 60%;
`;

const benefitsData = [
  {
    icon: Benefits_Icon_Track,
    heading: "Keep tasks in one place",
    subtext:
      "Save time, avoid losing work and information, delegate, and track tasks to stay on schedules",
  },
  {
    icon: Benefits_Icon_Priotitize,
    heading: "Prioritize your work",
    subtext:
      "Tracking tasks allows everyone to understand which are more important or require more time, so",
  },
  {
    icon: Benefits_Icon_Collaborate,
    heading: "Improved collaboration",
    subtext:
      "Tracking tasks allows everyone to understand which are more important or require more time, so",
  },
];

const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <Text>Key benefits of using task management software</Text>

      <ColumnContainer>
        {benefitsData.map((e, i) => (
          <ColumnDiv src={e.icon}>
            <motion.img
              custom={i}
              initial={controls.initial}
              whileInView={controls.animate}
              viewport={{ once: false }}
              src={e.icon}
            />
            <BenefitText
              custom={i + 0.3}
              initial={controls.initial}
              whileInView={controls.animate}
              viewport={{ once: false }}
            >
              {e.heading}
            </BenefitText>
            <BenefitSubtext
              custom={i + 0.6}
              initial={controls.initial}
              whileInView={controls.animate}
              viewport={{ once: false }}
            >
              {e.subtext}
            </BenefitSubtext>
          </ColumnDiv>
        ))}
      </ColumnContainer>
    </BenefitsContainer>
  );
};

export default BenefitsSection;
