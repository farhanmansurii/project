import React from "react";
import styled from "styled-components";
const NavbarTitle = styled.div`
  background-color: transparent;
  width: 147px;
  height: 50px;
  border-radius: 100px;
  padding-top:1rem;
  color: black;
  text-align: center;
  opacity: 1;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 18px; height: 40px;
  }
`;
const NavBarRight = styled.button`
  background-color: transparent;
  width: 127px;
  height: 50px;
  border: 2px solid white;
  border-radius: 100px;
  color: black;
  font-family: Poppins;
  text-align: center;
  font-size: 30px;
  opacity: 1;
  @media (max-width: 768px) {
    width: 120px; 
    font-size: 18px;
    height: 40px;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 40px;
  justify-content: space-between;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
    margin: 20px;
    align-items: center; font-size: 18px;
  }
`;
export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTitle style={{ fontFamily: "Rubik" }}>Taskman</NavbarTitle>
      <NavBarRight style={{ color: "white", fontSize: "16px" }}>
        Try free
      </NavBarRight>
    </NavbarContainer>
  );
}
