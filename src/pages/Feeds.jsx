import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { datas } from "../shared/datas";

function Feeds() {
  const navigate = useNavigate();
  return (
    <div>
      Feeds
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
      })}
    </div>
  );
}

export default Feeds;
