import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import {
  StAddSection,
  StTitle,
  title,
  description,
} from "../styles/AddSection.styles";
import { StContainer } from "../styles/Container.styles";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <StContainer>
        <StAddSection>
          <div>
            <StTitle>
              <span style={title}>MEMENTOS</span>
              <span style={description}>- Share Your Best Memento</span>
            </StTitle>
          </div>
          <div>
            <Button onClick={() => navigate("/add")}
            size="var(--size-extra-large)" fontSize=" var(--font-large)">
              + Memento
            </Button>
          </div>
        </StAddSection>
      </StContainer>
    </div>
  );
}

export default Home;
