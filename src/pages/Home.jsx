import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <button onClick={() => {navigate("/feeds")}}>Feeds</button>
      <button>+ Memento</button> */}

      {/* Large Memento Btn */}
      {/* <Button size="var(--size-large)" fontSize=" var(--font-medium)">
        + Memento
      </Button> */}
      <Header/>
    </div>
  );
}

export default Home;
