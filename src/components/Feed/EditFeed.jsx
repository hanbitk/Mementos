import React from "react";
import { StEditContainer, StEditForm } from "../../styles/EditFeed.styles";
import { StTitle, StInput, StTextarea } from "../../styles/AddForm.styles";
import Button from "../Button/Button";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updatePost } from "../../api/posts";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";

function EditFeed() {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("posts", getPosts);
  const foundData = data?.find((post) => post.id == id);

  // React Query - Update Post //
  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("포스트 수정 완료하였습니다!");
      navigate(`/feeds`);
    },
  });

  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  
  // Update Post Function
  const updateHandler = async (id) => {
    mutation.mutate({ id, description });
  };

  return (
    <StEditContainer>
      <div></div>
      <StEditForm>
        {/* Add Description Input */}
        <div>
          <StTitle>Description</StTitle>
          <StTextarea
            value={description}
            name="description"
            rows="15"
            cols="50"
            placeholder="What was your best Memento?"
            onChange={onChangeDescriptionHandler}
          />
        </div>

        <div>
          <Button
            fontSize="var(--font-size-regular)"
            onClick={() => updateHandler(foundData.id)}
          >
            Edit Memento
          </Button>
        </div>
      </StEditForm>
    </StEditContainer>
  );
}

export default EditFeed;
