import React from "react";
import {
  StFeedContainer,
  StFeed,
  StFeedDescription,
  StFeedtitle,
  StDeleteButton,
  StFeedInfo,
} from "../../styles/Feed.styles";
import { TiDelete } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../redux/modules/posts";
import { divStyle } from "../../styles/Feed.styles";

function Feed() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch(deletePost(id));
  };

  const masonryBreakpoints = {
    default: 4,
    1100: 2,
    700: 1,
  };
  return (
    <StFeedContainer>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => {
          return (
            <StFeed key={post.id} onClick={() => navigate(`/feeds/${post.id}`)}>
              <div style={divStyle}>
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
              <div style={divStyle}>
                <StFeedInfo>{post.writer}</StFeedInfo>
                <StFeedInfo>{post.date}</StFeedInfo>
              </div>
            </StFeed>
          );
        })}
      </Masonry>
    </StFeedContainer>
  );
}

export default Feed;
