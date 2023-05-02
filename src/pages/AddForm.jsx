import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { getCurrentDate } from "../redux/modules/posts";
import { addPost } from "../api/posts";
import { useMutation, useQueryClient } from "react-query";

function AddForm() {
  const navigate = useNavigate();

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
  
  // React Query - Add newPost //
  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("포스트 추가 성공하였습니다!");
    },
  });

  // Add newPost Function
  const submitHandler = async () => {
    if (!inputPost.title || !inputPost.description || !inputPost.writer)
      return alert("Please fill all the fields!");
    else {
      mutation.mutate(inputPost);
    }

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
          {/* Add Image Upload Field - TBD */}
          <StImgSection>
            🛠️ Upload Img <br /> Coming Soon 🛠️
          </StImgSection>

          <StFormSection>
            {/* Add Title Input */}
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

            {/* Add Description Input */}
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

            {/* Add Writer Input + Submit Button */}
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
