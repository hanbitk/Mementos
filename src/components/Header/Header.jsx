import React from "react";
import { StHeader, StIcon, StLogo, StNavbar } from "../../styles/Header.styles";
import { FaSistrix } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { linkStyle } from "../../styles/GlobalStyles";
import { StyleFlex } from "../../styles/Header.styles";

function Header() {
  return (
    <StHeader>
      <div style={StyleFlex}>
        <Link to="/" style={linkStyle}>
          <StLogo>MEMENTOS</StLogo>
        </Link>

        <StNavbar>
          <ul>
            <Link to="feeds" style={linkStyle}>
              <li>Feed</li>
            </Link>
            <Link to="feeds" style={linkStyle}>
              <li>Best Memento</li>
            </Link>
          </ul>
        </StNavbar>
      </div>
      <div style={StyleFlex}>
        <StIcon>
          <FaSistrix />
        </StIcon>
        <Button size="var(--size-small)" fontSize="var(--font-regular: 16px)">
          Sign In
        </Button>
      </div>
    </StHeader>
  );
}

export default Header;
