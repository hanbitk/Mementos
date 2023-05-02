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
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { divStyle, masonryBreakpoints } from "../../styles/Feed.styles";
import { useState } from "react";
import api from "../../axios/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/posts";
import { deletePost } from "../../api/posts";

function Feed() {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getPosts);

  // React Query - Delete Post //
  const queryClient = useQueryClient();
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("포스트 삭제 완료하였습니다!");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  // Delete Post Function
  const deleteHandler = async (id) => {
    const newFeed = data.filter((post) => post.id !== id);
    mutation.mutate(id);
    setPosts(newFeed);
  };

  return (
    <StFeedContainer>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data?.map((post) => {
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
