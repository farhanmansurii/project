import { useAnimation } from "framer-motion";
import SvgSignup from "../assets/Signup/Signup_Shape.svg";
import { controls } from "./GlobalStyles";
import {
  Button,
  Form,
  Image,
  Input,
  SignIn,
  SubText,
  Text,
} from "./Globalstyles/Styles";

function SigninSection() {
  const textControls = useAnimation();
  const subTextControls = useAnimation();
  return (
    <>
      <SignIn>
        <Text>Get better work done</Text>
        <SubText>
          See why millions of people across 195 <br /> countries use TaskMan.
        </SubText>
        <Form
          custom={2}
          initial={controls.initial}
          whileInView={controls.animate}
          viewport={{ once: false }}
        >
          <Input whileHover={{ scale: 1.1 }} placeholder="Name@company.com" />
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Try for free
          </Button>
        </Form>
        <Image src={SvgSignup} custom={1}

        style={{ '-webkit-transform': 'scaleX(-1)'}}
        initial={{
          opacity: 0,
          rotateY: 170,
      }}
      whileInView={{
        opacity: 1, rotateY: 170,
        transition: {
          delay:   0.1,
          duration: 0.5,
        },
      }}
        viewport={{ once: false }} />
      </SignIn>
    </>
  );
}

export default SigninSection;
