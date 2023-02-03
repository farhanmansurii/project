import styled from 'styled-components';
import HeroCard from '../assets/Hero/Hero_Illustration.svg'
import CircleSVG from './CircleSVG';
export const ImageSvg = styled.div`
  width: 50%;
  overflow: hidden;
  flex-direction:row-reverse;
  transform:translate(0,-40%);
  position:relative;float:right
   `;

const TextContainer = styled.div`
  width: 50%;
`;

const HeroSection = () => (
  <div style={{ display:'flex' , justifyContent:'space-between' }}><TextContainer>
    Hi test
  </TextContainer>
  <TextContainer>
    Hi test
  </TextContainer><TextContainer>
    Hi test
  </TextContainer><TextContainer>
    Hi test
  </TextContainer><TextContainer>
    Hi test
  </TextContainer>


  </div>
);

export default HeroSection;
