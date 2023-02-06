import React from "react";
import styled from "styled-components";
import Booking from "../assets/Logos/Booking.com_logo.svg";
import CN from "../assets/Logos/Cartoon_Network_logo.svg";
import CocaCola from "../assets/Logos/CocaCola_logo.svg";
import Dropbox_logo from "../assets/Logos/Dropbox_logo.svg";
import Netflix_logo from "../assets/Logos/Netflix_logo.svg";
import RedBull from "../assets/Logos/RedBull_logo.svg";
import Slack from "../assets/Logos/Slack_logo.svg";
import Spotify from "../assets/Logos/Spotify_logo.svg";
import Toshiba from "../assets/Logos/Toshiba_logo.svg";
import HeroCards from "./HeroSection/HeroCards";
import { Button, Form, Input } from "./Globalstyles/Styles";
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35%;
  gap: 1rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20rem;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  text-align: left;
  font-weight: 700;
  font-family: Rubik;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin-top: -1rem;
  line-height: normal;
  font-weight: 400;
  font-family: Poppins;
  text-align: left;
  color: #b1aaaa;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    font-size: 12px;
  }
`;

const LogosContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 3fr);
  gap: 30px;
  grid-gap: 2.5rem;
  margin-left: -1.5rem;
  margin-top: 180px;
  scale: 87%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 3fr);
    transform: scale(70%);
    margin-top: 100px;
    grid-gap: 3rem;
  }
`;



const HeroSVG = styled.div`
  width: 50%;
  left: -5rem;
@media (max-width: 768px) {
  width: 100%;
  transform:scale(58%);
  position: absolute;
  }
`;

const HeroSection = () => (
  <>
    <Container>
      <TextContainer>
        <Title>Task Management And Lists Tool</Title>
        <Subtitle>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </Subtitle>
        <Form
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Input placeholder="Name@company.com" />
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Try for free
          </Button>
        </Form>
        <LogosContainer>
          <img src={CN} style={{ width: "97px" }} />
          <img src={Booking} style={{ width: "232px" }} />
          <img src={Dropbox_logo} style={{ width: "200px" }} />
          <img src={Toshiba} style={{ width: "207px" }} />
          <img src={Slack} style={{ width: "156px" }} />
          <img src={Netflix_logo} style={{ width: "142px" }} />
          <img src={CocaCola} style={{ width: "157px" }} />
          <img src={Spotify} style={{ width: "189px" }} />
          <img src={RedBull} style={{ width: "120px" }} />
        </LogosContainer>
      </TextContainer>
      <HeroSVG>
        <HeroCards />
      </HeroSVG>
    </Container>
  </>
);
export default HeroSection;
