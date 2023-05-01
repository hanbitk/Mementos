import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { datas } from "../shared/datas";
import { useSelector } from "react-redux";

function Feeds() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {/* Feeds
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button>+ Memento</button>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/feeds/${data.id}`}>
              {data.title} : {data.description}
            </Link>
          </div>
        );
      })} */}

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button>+ Memento</button>

      {todos.map((todo) => {
        return (
          <div>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Feeds;
