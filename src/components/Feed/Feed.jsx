import React from "react";
import {
  StFeed,
  StFeedDate,
  StFeedDescription,
  StFeedtitle,
  StDeleteButton,
} from "../../styles/Feed.styles";
import { TiDelete } from "react-icons/ti";


function Feed({ todo }) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `0${day}.0${month}.${year}`;

  const deleteHandler = () => {
    alert("Delete Button!");
  };

  return (
    <StFeed>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StFeedtitle>{todo.title}</StFeedtitle>
        <StDeleteButton onClick={deleteHandler} >
          <TiDelete />
        </StDeleteButton>
      </div>
      <StFeedDescription>{todo.description}</StFeedDescription>
      <StFeedDate>{currentDate}</StFeedDate>
    </StFeed>
  );
}

export default Feed;
