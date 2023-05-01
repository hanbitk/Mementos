import React from "react";
import { useNavigate } from "react-router-dom";
import { StContainer } from "../styles/Container.styles";
import AddSection from "../components/AddSection/AddSection";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <StContainer>
        <AddSection>- Share Your Best Memento With Us</AddSection>
      </StContainer>
    </div>
  );
}

export default Home;
