import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { addPost } from "../redux/modules/posts";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const id = uuidv4();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [post, setPost] = useState({
    id: 0,
    title: "",
    description: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({ ...post, id }));
    setPost({
      id: 0,
      title: "",
      description: "",
    });

    setTimeout(() => {
      navigate("/feeds");
    }, 1000);
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
                value={post.title}
                name="title"
                placeholder="Title"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <StTitle>Description</StTitle>
              <StTextarea
                value={post.description}
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
