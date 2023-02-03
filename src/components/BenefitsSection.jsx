import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Benefits_Icon_Collaborate from '../assets/Benefits/Benefits_Icon_Collaborate.svg'
import Benefits_Icon_Priotitize from '../assets/Benefits/Benefits_Icon_Priotitize.svg'
import Benefits_Icon_Track from '../assets/Benefits/Benefits_Icon_Track.svg'
import { SignIn, Text } from './SignInPage/Styles';
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
  margin: 10px ;
  margin:1rem;
  text-align: center;
  @media (max-width: 768px) {
}
`;

const BenefitText = styled.div`
  font-size: 25px ;
  font-family: Rubik;
  text-align: center;
    margin:1rem;
    letter-spacing: 0px;
    color: #1E1C24;
    opacity: 1;
    @media (max-width: 768px) {
      font-size: 18px ;
      margin:0.5rem;
}`

const BenefitSubtext = styled.div`
text-align: center;
width: 310px;
height: 78px;
font-size: 16px ;
font-family:Poppins;
font: normal ;
color: #B1AAAA;
opacity: 1;
@media (max-width: 768px) {
  font-size: 15px ;
}`


const BenefitsContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`;

const BenefitsTitle = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Rubik;
  width: 787px;
  height: 132px;
  font-weight: bold;
  line-height: normal;
  color: #1E1C24;
  opacity: 1;
  overflow-wrap: break-word;
  width: 60%;
`;

const benefitsData = [

  {
    icon: Benefits_Icon_Track,
    heading: 'Keep tasks in one place',
    subtext: 'Save time, avoid losing work and information, delegate, and track tasks to stay on schedules'
  },
  {
    icon: Benefits_Icon_Priotitize,
    heading: 'Prioritize your work',
    subtext: 'Tracking tasks allows everyone to understand which are more important or require more time, so'
  },
  {
    icon: Benefits_Icon_Collaborate,
    heading: 'Improved collaboration',
    subtext: 'Tracking tasks allows everyone to understand which are more important or require more time, so'
  }
]

const BenefitsSection = () => {
  return (<BenefitsContainer>
    <Text>Key benefits of using task  management software</Text>

    <ColumnContainer>
      {
        benefitsData.map((e, i) =>

          <ColumnDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.7 }}
          >
            <img src={e.icon} />
            <BenefitText>{e.heading}</BenefitText>
            <BenefitSubtext>{e.subtext}</BenefitSubtext>

          </ColumnDiv>
        )
      }


    </ColumnContainer>
  </BenefitsContainer>
  );
};

export default BenefitsSection;
