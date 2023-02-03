import './App.css'
import Navbar from './components/Navbar'
import BenefitsSection from './components/BenefitsSection'
import CircleSVG from './components/CircleSVG'
import Hero from './components/Hero'
import Signin from './components/Signin'
import styled from 'styled-components'
import WhySection from './components/WhySection'
import HeroCards from './components/HeroSection/HeroCards'

const Container = styled.div`
overflow: hidden;
`
function App() {

  return (
  <Container>
    <Navbar />
    <Hero/>
    <CircleSVG/> 
     <BenefitsSection/>
    <WhySection/>
    <Signin/>
  </Container>
  )
}

export default App
