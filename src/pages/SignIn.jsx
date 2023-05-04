import React from "react";
import { Link } from "react-router-dom";
import { StSignIn, linkStyle } from "../styles/SignIn.styles";

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


