import { motion } from "framer-motion";
import styled from "styled-components";

export const SignIn = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto 0;
  border-top: 1px solid #e6e6e6;
  height: 600px;
  @media (max-width: 768px) {
  }
`;
export const Image = styled.img`
  position: absolute;
  transform: scaleX(-1);
  z-index: -100;
  align-self: flex-end;
  @keyframes appear {
    from {
      right: -10%;
    }
    to {
      right: 0;
    }
  }
  overflow: hidden;
  animation: appear 1s ease-in-out forwards;
  @media (max-width: 768px) {
  }
`;
export const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const Text = styled(motion.h1)`
  font-size: 40px;
  width: 60%;
  font-family: Rubik;
  color: #1e1c24;
  @media (max-width: 768px) {
    font-size: 30px;
    width: 70%;
  }
`;

export const Input = styled(motion.input)`
  font-family: Poppins;
  width: fit-content;
  padding-inline: 30px;
  border: 2px solid #ebebeb;
  height: 40px;
  border-radius: 100px;
  opacity: 1;
  outline: none;
  color: #c4c4c4;
  padding-left: 1rem;
  ::placeholder {
    color: #c4c4c4;
    font-family: Poppins;
  }
`;
export const Form = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: medium;
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const Button = styled(motion.button)`
  width: fit-content;
  padding-inline: 30px;
  font-family: Poppins;
  box-shadow: 0px 30px 50px #0634ff57;
  border: 0px;
  margin-left: 15px;
  align-items: center;

  color: white;
  outline: 0px;
  margin-top: 2px;
  background: #0634ff 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
  font-size: 12px;
  :hover {
    transform: scale(1.1);
    transition-duration: 1200ms;
  }

  @media (max-width: 768px) {
    border: 1px solid white;
  }
`;

export const SubText = styled(motion.div)`
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  font-size: 18px;
  width: 80%;
  font-family: Poppins;
`;
