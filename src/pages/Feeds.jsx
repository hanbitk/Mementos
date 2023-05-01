import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StContainer } from "../styles/Container.styles";
import AddSection from "../components/AddSection/AddSection";
import Feed from "../components/Feed/Feed";

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

      {/* <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button>+ Memento</button> */}
      <StContainer>
        <AddSection>- What Was Your Best Memento In Life?</AddSection>
      </StContainer>
      <StContainer
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="var(--font-regular)"
        fontWeight="var(--weight-semi-bold)"
        padding="20px"
        marginTop="20px"
      >
        Feed
      </StContainer>

      <Feed />
    </div>
  );
}

export default Feeds;
