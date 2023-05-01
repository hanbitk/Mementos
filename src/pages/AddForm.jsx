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

  const id = uuidv4();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });

    setTimeout(() =>{
      navigate("/feeds");
    }, 1000)
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
                value={todo.title}
                name="title"
                placeholder="Title"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <StTitle>Description</StTitle>
              <StTextarea
                value={todo.description}
                name="description"
                rows="15"
                cols="50"
                placeholder="What was your best Memento?"
                onChange={onChangeHandler}
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
