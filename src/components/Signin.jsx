import SvgSignup from '../assets/Signup/Signup_Shape.svg'
import { Button, Form, Input, SignIn, SubText, Image, Text } from "./SignInPage/Styles";
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

function Signin() {
  const textControls = useAnimation();
  const subTextControls = useAnimation();
  return (
    <>
      <SignIn>
        <Text

        >Get better work done</Text>
        <SubText

        >
          See why millions of people across 195 <br /> countries use TaskMan.
        </SubText>
        <Form >
          <Input placeholder="Name@company.com" />
          <Button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>Try for free</Button>
        </Form>

        <Image src={SvgSignup} />
      </SignIn>
    </>
  );
}

export default Signin;
