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
import { getCurrentDate } from "../redux/modules/posts";
import api from "../axios/api";

function AddForm() {
  // const id = uuidv4();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [inputPost, setInputPost] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    writer: "",
    date: getCurrentDate(),
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputPost({ ...inputPost, [name]: value });
  };

  // Redux Toolkit AddForm //
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (!inputPost.title || !inputPost.description || !inputPost.writer)
  //     return alert("Please fill all the fields!");
  //   if (inputPost.title.length < 10) return alert("Title must be up to 10 characters");
  //   else {
  //     dispatch(addPost({ ...inputPost, id }));
  //     setInputPost({
  //       title: "",
  //       description: "",
  //       writer: "",
  //       date: getCurrentDate(),
  //     });

  //     setTimeout(() => {
  //       navigate("/feeds");
  //     }, 1000);
  //   }
  // };

  // Add Form Function

  const submitHandler = async () => {
    if (!inputPost.title || !inputPost.description || !inputPost.writer)
      return alert("Please fill all the fields!");
    else {
      api.post("/posts", inputPost);
    }

    setInputPost({inputPost});

    setTimeout(() => {
      navigate("/feeds");
    }, 1000);
  };

  return (
    <div>
      <StContainer display="flex">
        <StForm
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <StImgSection>
            🛠️ Upload Img <br /> Coming Soon 🛠️
          </StImgSection>

          <StFormSection>
            <div>
              <StTitle>Title</StTitle>
              <StInput
                value={inputPost.title}
                name="title"
                placeholder="Title (up to 10 characters)"
                onChange={onChangeHandler}
                width="400px"
                marginBotom="10px"
              />
            </div>

            <div>
              <StTitle>Description</StTitle>
              <StTextarea
                value={inputPost.description}
                name="description"
                rows="15"
                cols="50"
                placeholder="What was your best Memento?"
                onChange={onChangeHandler}
              />
            </div>

            <div style={btnDiv}>
              <StInput
                value={inputPost.name}
                name="writer"
                placeholder="Writer (Up to 5 character)"
                onChange={onChangeHandler}
                width="260px"
                alignSelf="center"
                marginBotom="0px"
              />
              <div>
                <Button fontSize="var(--font-size-regular)">+ Memento</Button>
              </div>
            </div>
          </StFormSection>
        </StForm>
      </StContainer>
    </div>
  );
}

export default AddForm;
