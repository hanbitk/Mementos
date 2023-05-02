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
import { useEffect, useState } from "react";
import api from "../../axios/api";

function Feed() {
  // const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState(null);
  const [targetId, setTargetId] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // const deleteHandler = (id) => {
  //   dispatch(deletePost(id));
  // };

  const masonryBreakpoints = {
    default: 4,
    1100: 2,
    700: 1,
  };

  // Read Posts Function
  const fetchPosts = async () => {
    const { data } = await api.get("/posts");

    setPosts(data);
  };

  useEffect(() => {
    //Get db
    fetchPosts();
  }, []);

  // Delete Post Function
  const deleteHandler = async (id) => {
    api.delete(`/posts/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Update Post Function
  const updateHandler = async (id) => {
    api.patch(`/posts/${targetId}`, {
      description: description,
    });

    setPosts(
      posts.map((post) => {
        if (post.id == targetId) {
          return { ...post, description };
        } else {
          return post;
        }
      })
    );
  };

  return (
    <StFeedContainer>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>
          <input
            value={targetId}
            type="text"
            placeholder="id"
            onChange={(e) => {
              setTargetId(e.target.value);
            }}
          />
          <input
            value={description}
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button onClick={updateHandler}>Update</button>
        </div>
        {posts?.map((post) => {
          return (
            <StFeed key={post.id} onClick={() => navigate(`/feeds/${post.id}`)}>
              <div style={divStyle}>
                <StFeedtitle>{post.title}</StFeedtitle>
                <StDeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    // deleteHandler(post.id);
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
