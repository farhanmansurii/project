import Why2 from './Why_Illustration-2.svg'
import Why1 from './Why_Illustration-1.svg'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
overflow: hidden;
align-items: center;
position: relative;
width: 812px;
height: 888px;
@media (max-width: 768px) {
  width: 100%;
  height: 450px;
  top: 1px;
}

`
const Image1 = styled(motion.img)`
position: absolute;
width: 612px;
left: 40px;
top: 100px;
z-index: 1;

@media (max-width: 768px) {
  width:90%;
  top: 10;
}`

const Image2 = styled(motion.img)`
z-index: 2;
height:612px;
left:50px;
width: 100%;
top: 270px;

position: absolute;
`
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    }
  }
}
const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}
function Illustrations() {

  return (<Container>
    <motion.div  variants={variants} initial="hidden" animate="show">
      <Image2 variants={item} src={Why2} />
      <Image1 variants={item} src={Why1} />
    </motion.div>
  </Container>
  )
}

export default Illustrations
