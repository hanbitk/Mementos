import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => {navigate("/feeds")}}>Feeds</button>
      <button>+ Memento</button>
    </div>
  );
}

export default Home;
