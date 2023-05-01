import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function FeedDetail() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const foundTodo = todos.find((todo) => todo.id === params.id);

  return (
    <div>
      <p>{foundTodo.title}</p>
    </div>
  );
}

export default FeedDetail;
