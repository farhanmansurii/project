import React from 'react'
import styled from 'styled-components'
import Card4 from './Hero_Illustration_Card-4.svg'
import Card3 from './Hero_Illustration_Card-3.svg'
import Card2 from './Hero_Illustration_Card-2.svg'
import Card1 from './Hero_Illustration_Card-1.svg'
const Container = styled.div`
  position: absolute;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  height: 100vh;
 

`
const Image4 = styled.img`
 position: relative;
    width: 59%;
    bottom: 69.5rem;
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
const Image3 = styled.img`
   position: relative;
    width: 70%;
    bottom: 39rem;
    left: 1rem;
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
const Image2 = styled.img`
position: relative;
    top: -17rem;
    width: 100%;
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
const Image1 = styled.img`
    position: relative;
    align-self: center;
    width:60%;
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
  return (
    <Container>
      <Image1 src={Card1} />
      <Image2 src={Card2} />
      <Image3 src={Card3} />
      <Image4 src={Card4} />

    </Container>
  )
}
