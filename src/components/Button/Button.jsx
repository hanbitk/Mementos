import React from "react";
import { Stbutton } from "../../styles/Button.styles";

function Button({ children, size, fontSize, onClick }) {
  return (
    <Stbutton onClick={onClick} size={size} fontSize={fontSize}>
      {children}
    </Stbutton>
  );
}

export default Button;
