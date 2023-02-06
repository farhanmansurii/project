import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import CardsWhy from "./WhySection/CardsWhy";
import ShapesWhy from "./WhySection/ShapesWhy";
import Arrow from "./WhySection/Arrow_icon.svg";
const WhyText = styled.div`
  font-size: 40px;
  width: 75%;
  font-family: Rubik;
  line-height: normal;
  text-align: center;
  color: #1e1c24;
  @media (max-width: 768px) {
    font-size: 30px;
    width: 70%;
  }
`;

export const controls = {
  initial: {
    opacity: 0,
    y: 20,
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

const WhySubtext = styled(motion.div)`
  width: 75%;
  line-height: normal;
  font-family: Poppins;
  text-align: left;
  font-size: 16px;
  color: #b1aaaa;
  opacity: 1;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const WhyContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  justify-self: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    height: max-content;
    width: 100%;
  }
`;
const Learn = styled(motion.div)`
  text-align: left;
  font-weight: bolder;
  font-size: 18px;

  font-family: Poppins;
  letter-spacing: 0px;
  color: #1e1c24;
  opacity: 1;
  margin-top: 1rem;
`;

const WhyTextContainer = styled(motion.div)`
  width: 60%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export default function WhySection() {
  // const { ref, inView } = useInView();
  // const animation = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         duration: 1,
  //         opacity: 1,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ opacity: 0, y: 50 });
  //   }
  //   console.log("is container in view", inView);
  // }, [inView]);

  return (
    <WhyContainer>
      <CardsWhy />
      <ShapesWhy />
      <WhyTextContainer>
        <WhyText style={{ textAlign: "left" }}>
          Why do you need task management software?
        </WhyText>
        <WhySubtext
          custom={1}
          initial={controls.initial}
          whileInView={controls.animate}
          viewport={{ once: false }}
        >
          Do you waste time organizing sticky notes, searching your email and
          apps for to-dos, and figuring out what to work on first? Then you need
          one solution to prioritize your tasks, manage your time, and meet your
          deadlines.
        </WhySubtext>
        <Learn
          custom={1.2}
          initial={controls.initial}
          whileInView={controls.animate}
          viewport={{ once: false }}
        >
          LEARN MORE <svg xmlns="http://www.w3.org/2000/svg" width="26.438" height="11.749" viewBox="0 0 26.438 11.749"><g transform="translate(0 -137.052)"><path d="M26.285,142.53l-5.875-5.355a.491.491,0,0,0-.536-.076.444.444,0,0,0-.291.444v3.427H.49a.471.471,0,0,0-.49.489V144.4a.471.471,0,0,0,.49.489H19.584v3.427a.461.461,0,0,0,.291.444.477.477,0,0,0,.536-.092l5.875-5.417a.5.5,0,0,0,.153-.367A.483.483,0,0,0,26.285,142.53Z" fill="#0634ff"/></g></svg>
        </Learn>
      </WhyTextContainer>
    </WhyContainer>
  );
}
