import React from 'react'
import styled from 'styled-components'
import Shapes from '../assets/Why/Why_Illustration.svg'
import { Text } from './SignInPage/Styles';
import Illustrations from './BenefitsSection/Illustrations';
const WhyText = styled.div`
 font-size: 50px;
  width: 60%;
  font-family: Rubik;
  line-height: normal;
  width: 500px;
  text-align: center;
  color: #1e1c24;
  @media (max-width: 768px) {
    font-size: 30px;   
    width: 70%;
  }
`

// const ImageSvg = styled.div`
//   overflow: hidden;
// position:relative;  `;

const WhySubtext = styled.div`
width: 75%;
line-height: normal;
font-family: Poppins;
text-align: left;
font-size:16px;
color: #B1AAAA;
opacity: 1;
@media (max-width: 768px) {
    width: 90%;
  }`

const WhyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: max-content;
    
  }
`
const Learn = styled.div`
  text-align: left;
font-weight:bolder;
font-size: 18px ;
font-family:Poppins;
letter-spacing: 0px;
color: #1E1C24;
opacity: 1;
margin-top: 1rem;
`



const WhyTextContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
  
`
export default function WhyComponent() {
  return (
    <WhyContainer>
      <Illustrations />
      <WhyTextContainer style={{  }}>
        <WhyText style={{ textAlign: 'left',marginTop:'-1rem' }}>Why do you need task management software?</WhyText>
        <WhySubtext>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</WhySubtext>
        <Learn>LEARN MORE</Learn>
      </WhyTextContainer>

    </WhyContainer>
  )
}
