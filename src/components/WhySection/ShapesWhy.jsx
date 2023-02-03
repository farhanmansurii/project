import React from 'react'
import styled from 'styled-components'
import Donut from './Why_Shapes_Ellipse.svg'
import Bar from './Why_Shapes_Rectangle.svg'

const DonutDiv = styled.img`
position: relative;
left: -53%;
top: -80px;
width: 50%;
@media (max-width: 768px) {
  width:25rem;
  top: -10rem;
}
`
const BarDiv = styled.img`
position: relative;
width: 60%;
fill: orange;
bottom: -190px;
transform: rotate(-110deg);
left: -48%;
@media (max-width: 768px) {
  width:30rem;
  top: -1rem;
  left:-13rem;
}
`
const ShapesContainer= styled.div`
position:absolute;
width:fit
`
export default function ShapesWhy() {
  return (
    <ShapesContainer style={{ position: 'absolute', width: 'fit-content' }}>
      <BarDiv src={Bar} />
      <DonutDiv src={Donut} />
    </ShapesContainer>
  )
}
