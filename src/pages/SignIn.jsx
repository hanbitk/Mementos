import React from "react";
import { Link } from "react-router-dom";
import {
  StSignInContainer,
  StSignInHeader,
  StSignInFormHeader,
  StSignInForm,
  StSignIn,
  StSignInInputs,
  StSignInInput,
  StInputBox,
  StSignUp,
  linkStyle,
  logoLinkStyle,
  iconStyle,
  signInIconStyle,
} from "../styles/SignIn.styles";
import Button from "../components/Button/Button";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";

function SignIn() {
  return (
    <StSignInContainer>
      <Link to="/" style={logoLinkStyle}>
      <StSignInHeader>MEMENTOS</StSignInHeader>
      </Link>

      <StSignInForm>
        <StSignInFormHeader>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <MdLogin style={signInIconStyle} />
            <h4>Sign-in with Username</h4>
          </div>
          <StSignIn>
            <StSignInInputs>
              <StInputBox borderRadius="10px 10px 0 0">
                <AiOutlineUser style={iconStyle} />
                <StSignInInput placeholder="Username" />
              </StInputBox>
              <StInputBox borderRadius="0 0 10px 10px">
                <RiLockPasswordLine style={iconStyle} />
                <StSignInInput placeholder="Password" />
              </StInputBox>
            </StSignInInputs>
          </StSignIn>
        </StSignInFormHeader>
        <Button size="450px" fontSize="var(--font-medium)">
          Sign In
        </Button>
      </StSignInForm>

      <StSignUp>
        <p
          style={{ color: "var(--color-gray)", fontSize: "var(--font-small)" }}
        >
          Don't have a account?
        </p>
        <Link to="/register" style={linkStyle}>
          Sign Up
        </Link>
      </StSignUp>
    </StSignInContainer>
  );
}

export default SignIn;
