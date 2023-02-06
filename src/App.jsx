import styled from "styled-components";
import "./App.css";
import BenefitsSection from "./components/BenefitsSection";
import CircleSVG from "./components/CircleSVG";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SigninSection from "./components/SigninSection";
import WhySection from "./components/WhySection";

const Container = styled.div`
  overflow: hidden;
`;
function App() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <CircleSVG />
      <BenefitsSection />
      <WhySection />
      <SigninSection />
    </Container>
  );
}

export default App;
