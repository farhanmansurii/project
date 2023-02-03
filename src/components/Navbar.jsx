import React from 'react'
import styled from 'styled-components'
const NavbarTitle = styled.div`
  
  top: 71px;
left: 178px;
width: 138px;
height: 36px;
/* UI Properties */
text-align: left;
font: 20px/36px Rubik;
letter-spacing: 0px;
color: #1E1C24;
opacity: 1;
`
const NavBarRight = styled.button`
background-color: transparent;
width: 147px;
height: 50px;
border: 2px solid #111111;
border-radius: 100px;
color: black;
font-family: Poppins;
text-align: center;
opacity: 1;
`
const NavbarContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 40px;
  font-size: 12px;
  justify-content: space-between;
`
export default function Navbar() {
  return (
    <NavbarContainer>

      <NavbarTitle>
        Taskman
      </NavbarTitle>
      <NavBarRight>Try free</NavBarRight>
    </NavbarContainer>
  )
}
