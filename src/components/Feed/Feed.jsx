import React from "react";
import {
  StFeedContainer,
  StFeed,
  StFeedDate,
  StFeedDescription,
  StFeedtitle,
  StDeleteButton,
} from "../../styles/Feed.styles";
import { TiDelete } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/modules/todos";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

function Feed() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `0${day}.0${month}.${year}`;

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <StFeedContainer>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {todos.map((todo) => {
          return (
            <Link to={`/feeds/${todo.id}`}>
              <StFeed key={todo.id}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <StFeedtitle>{todo.title}</StFeedtitle>
                  <StDeleteButton onClick={() => deleteHandler(todo.id)}>
                    <TiDelete />
                  </StDeleteButton>
                </div>
                <StFeedDescription>{todo.description}</StFeedDescription>
                <StFeedDate>{currentDate}</StFeedDate>
              </StFeed>
            </Link>
          );
        })}
      </Masonry>
    </StFeedContainer>
  );
}

export default Feed;
