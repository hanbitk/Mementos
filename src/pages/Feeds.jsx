import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { datas } from "../shared/datas";
import { useSelector } from "react-redux";
import { StContainer } from "../styles/Container.styles";
import AddSection from "../components/AddSection/AddSection";
import Feed from "../components/Feed/Feed";
import { StFeedContainer } from "../styles/Feed.styles";
import Masonry from "react-masonry-css";

function Feeds() {
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1,
  };

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
      <StFeedContainer>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                {/* <Link to={`/feeds/${todo.id}`}> */}
                  <Feed todo={todo} />
                {/* </Link> */}
              </div>
            );
          })}
        </Masonry>
      </StFeedContainer>
    </div>
  );
}

export default Feeds;
