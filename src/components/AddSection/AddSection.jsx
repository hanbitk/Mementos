import React from "react";
import { StAddSection, StTitle, title, description } from "../../styles/AddSection.styles";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


function AddSection({children}) {
  const navigate = useNavigate();
  return (
    <StAddSection>
      <div>
        <StTitle>
          <span style={title}>MEMENTOS</span>
          <span style={description}>{children}</span>
        </StTitle>
      </div>
      <div>
        <Button
          onClick={() => navigate("/add")}
          size="var(--size-extra-large)"
          fontSize=" var(--font-large)"
        >
          + Memento
        </Button>
      </div>
    </StAddSection>
  );
}

export default AddSection;
