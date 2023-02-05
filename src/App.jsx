import styled from "styled-components";
import "./App.css";
import BenefitsSection from "./components/BenefitsSection";
import CircleSVG from "./components/CircleSVG";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import WhySection from "./components/WhySection";

const Container = styled.div`
  overflow: hidden;
`;
function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <CircleSVG />
      <BenefitsSection />
      <WhySection />
      <Signin />
    </Container>
  );
}

export default App;
