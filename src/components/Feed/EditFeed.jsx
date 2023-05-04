import React from "react";
import { StEditContainer, StEditForm, StEditFormButtons } from "../../styles/EditFeed.styles";
import { StTitle, StTextarea } from "../../styles/AddForm.styles";
import Button from "../Button/Button";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updatePost } from "../../api/posts";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";

function EditFeed({ handleClose }) {
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("posts", getPosts);

  // React Query - Update Post //
  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("포스트 수정 완료하였습니다!");
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

  const foundData = data?.find((post) => post.id == id);

  // Update Post Function
  const updateHandler = async (id) => {
    if (!description) return alert('Changes cannot be in blank!');
    mutation.mutate({ id, description });
  };

  return (
    <StEditContainer>
      <StEditForm>
        {/* Edit Description Input */}
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

        {/* Edit & Cancel Button */}
        <StEditFormButtons>
          <Button
            fontSize="var(--font-size-regular)"
            onClick={() => {
              updateHandler(foundData.id);
              if (description) {
                setTimeout(() =>{
                  handleClose();
                }, 500)
              }
            }}
          >
            Edit Memento
          </Button>
          <Button
            fontSize="var(--font-size-regular)"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
        </StEditFormButtons>
      </StEditForm>
    </StEditContainer>
  );
}

export default EditFeed;
