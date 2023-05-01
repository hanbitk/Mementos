import React, { useState } from "react";
import {
  StForm,
  StFormSection,
  StImgSection,
  StInput,
  StTextarea,
  StTitle,
} from "../styles/AddForm.styles";
import { StContainer } from "../styles/Container.styles";
import Button from "../components/Button/Button";
import { btnDiv } from "../styles/AddForm.styles";

function AddForm() {
  return (
    <div>
      <StContainer display="flex">
        <StForm>
          <StImgSection>
            🛠️ Upload Img <br /> Coming Soon 🛠️
          </StImgSection>

          <StFormSection>
            <div>
              <StTitle>Title</StTitle>
              <StInput placeholder="#Title" />
            </div>
            <div>
              <StTitle>Description</StTitle>
              <StTextarea
                rows="15"
                cols="50"
                placeholder="What was your best Memento?"
              />
            </div>
            <div style={btnDiv}>
              <Button fontSize="var(--font-size-regular)">+ Memento</Button>
            </div>
          </StFormSection>
        </StForm>
      </StContainer>
    </div>
  );
}

export default AddForm;
