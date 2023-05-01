import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
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
import { addTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const textareaChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: '#' + title,
      description,
    };
    dispatch(addTodo(newTodo));

    setTitle('');
    setDescription('');

    setTimeout(() =>{
      navigate("/feeds");
    }, 1500)
  };

  return (
    <div>
      <StContainer display="flex">
        <StForm onSubmit={submitHandler}>
          <StImgSection>
            🛠️ Upload Img <br /> Coming Soon 🛠️
          </StImgSection>

          <StFormSection>
            <div>
              <StTitle>Title</StTitle>
              <StInput
                value={title}
                name="title"
                placeholder="Title"
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <StTitle>Description</StTitle>
              <StTextarea
                value={description}
                name="description"
                rows="15"
                cols="50"
                placeholder="What was your best Memento?"
                onChange={textareaChangeHandler}
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
