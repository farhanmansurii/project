import React from 'react';
import styled from 'styled-components';
import CircleSVG from './CircleSVG';
import HeroIll from '../assets/Hero/Hero_Illustration.svg'
import HeroIll2 from '../assets/Hero/Hero_Illustration_Card-4.svg'
import CN from '../assets/Logos/Cartoon_Network_logo.svg'
import Booking from '../assets/Logos/Booking.com_logo.svg'
import CocaCola from '../assets/Logos/CocaCola_logo.svg'
import Dropbox_logo from '../assets/Logos/Dropbox_logo.svg'
import Netflix_logo from '../assets/Logos/Netflix_logo.svg'
import Redbull from '../assets/Logos/Redbull_logo.svg'
import Slack from '../assets/Logos/Slack_logo.svg'
import Spotify from '../assets/Logos/Spotify_logo.svg'
import Toshiba from '../assets/Logos/Toshiba_logo.svg'
import { Button, Form, Input } from './SignInPage/Styles';
const Container = styled.div`
  display: flex;
  justify-content: space-around ;
  width: 100%;
overflow: hidden;
  padding: 0 ;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:500px;
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family : Rubik
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  top: 575px;
  font-family : Poppins;
  line-height:35px ;
left: 180px;
width: 550px;
height: 116px;
text-align: left;
  color: #B1AAAA;
`;


const LogosContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: repeat(3, 3fr);
  gap: 30px;
  grid-gap: 2.5rem;
  margin-left: -1.5rem;
  margin-top:300px;
  scale: 90%;
  
`;

const Logo = styled.svg`
margin-right:1rem;
`;

const HeroSVG = styled.div`
  width: 50%;
  margin-top:-100px
  
`;

const Hero = () => (<>
  <Container>
    <TextContainer>
      <Title>Task Management And Lists Tool</Title>
      <Subtitle>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</Subtitle>
      <Form initial={{ y: '25%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 0.7 }}>
        <Input placeholder="Name@company.com" />
        <Button whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>Try for free</Button>
      </Form>
      <LogosContainer>
        <img src={CN} style={{ width: '97px'  }} />
        <img src={Booking} style={{ width: '232px' }} />
        <img src={Dropbox_logo} style={{ width: '200px' }} />
        <img src={Toshiba} style={{ width: '207px' }} />
        <img src={Slack} style={{ width: '156px' }} />
        <img src={Netflix_logo} style={{ width: '142px' }} />
        <img src={CocaCola} style={{ width: '157px' }} />
        <img src={Spotify} style={{ width: '189px' }} />
        <img src={Redbull} style={{ width: '122px' }} />

      </LogosContainer>

    </TextContainer>
    <HeroSVG>

      <img  src={HeroIll} style={{ position: 'relative', left: '-200px',  width: '150%', zIndex: '10' }} />
    </HeroSVG>
  </Container>
</>
)
export default Hero;
