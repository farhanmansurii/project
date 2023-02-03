import React from 'react'
import styled from 'styled-components'
import Card4 from './Hero_Illustration_Card-4.svg'
import Card3 from './Hero_Illustration_Card-3.svg'
import Card2 from './Hero_Illustration_Card-2.svg'
import Card1 from './Hero_Illustration_Card-1.svg'
import { motion } from 'framer-motion'
const Container = styled(motion.div)`
  position: absolute;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
 

`
const Image4 = styled(motion.img)`
 position: relative;
    width: 74%;
    bottom: 73.5rem;
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
};
`
const Image3 = styled(motion.img)`
   position: relative;
    width: 90%;
    bottom: 39rem;
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
};
`
const Image2 = styled(motion.img)`
position: relative;
    top: -17rem;
    width: 120%;
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
};
    z-index: 3;
`
const Image1 = styled(motion.img)`
    position: relative;
    align-self: center;
    width:80%;
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
};


`
export default function HeroCards() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      }
    }
  }
  const item = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  }
  return (
    <Container variants={variants} initial="hidden" animate="show">
      <Image1 variants={item} src={Card1} />
      <Image2 variants={item} src={Card2} />
      <Image3 variants={item} src={Card3} />
      <Image4  variants={item} src={Card4} />

    </Container>
  )
}
