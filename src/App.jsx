import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import BenefitsSection from './components/BenefitsSection'
import WhyComponent from './components/WhyComponent'
import CircleSVG from './components/CircleSVG'
import Hero from './components/Hero'
import Signin from './components/Signin'
import styled from 'styled-components'

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
    <WhyComponent/>
    <Signin/>
    
  </Container>
  )
}

export default App
