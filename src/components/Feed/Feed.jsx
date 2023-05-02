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
import Masonry from "react-masonry-css";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../redux/modules/posts";

function Feed() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch(deletePost(id));
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
        {posts.map((post) => {
          return (
            // <Link to={`/feeds/${post.id}`}>
            <StFeed key={post.id} onClick={() => navigate(`/feeds/${post.id}`)}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <StFeedtitle>{post.title}</StFeedtitle>
                <StDeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteHandler(post.id);
                  }}
                >
                  <TiDelete />
                </StDeleteButton>
              </div>
              <StFeedDescription>{post.description}</StFeedDescription>
              <StFeedDate>{post.date}</StFeedDate>
            </StFeed>
            // </Link>
          );
        })}
      </Masonry>
    </StFeedContainer>
  );
}

export default Feed;
