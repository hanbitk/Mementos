import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      
      <StSignIn>
        <div>⚙️ Under Construction ⚙️</div>
        <Link to="/" style={linkStyle}>Go Back To Mementos</Link>
      </StSignIn>
    </div>
  );
}

export default SignIn;

const StSignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: var(--font-size-extra-large);
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  border: "1px solid white",
  padding: "10px", 
};
