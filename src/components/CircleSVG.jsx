import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: -180%;
  left: 50%;
  z-index: -10;
  overflow: hidden;
  width: 50%;
`;
const CircleSVG = () => {
  return (
    <Container>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="2429.182"
        height="2429.182"
        viewBox="0 0 2429.182 2429.182"
        initial={{ x: "90%" }}
        animate={{ x: 0 }}
        style={{ zIndex: "-50" }}
        transition={{ duration: 1.5 }}
      >
        <g transform="translate(-854.909 587.091)">
          <motion.path
            d="M1214.591,0c670.8,0,1214.591,543.791,1214.591,1214.591S1885.391,2429.182,1214.591,2429.182,0,1885.391,0,1214.591,543.791,0,1214.591,0Z"
            transform="translate(854.909 -587.091)"
            fill="#0634ff"
          />
          <motion.circle
            cx="1035.742"
            cy="1035.742"
            r="1035.742"
            transform="translate(979.888 -229.393)"
            fill="#ffbc00"
            transition={{ duration: 1.5, delay: "0.5" }}
          />
          <motion.circle
            cx="858.33"
            cy="858.33"
            r="858.33"
            transform="translate(1168.074 125.431)"
            fill="#3a4151"
            transition={{ delay: 1 }}
          />
        </g>
      </motion.svg>
    </Container>
  );
};

export default CircleSVG;
