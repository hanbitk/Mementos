import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { StContainer } from "../styles/Container.styles";
import {
  StPostTitle,
  StPostDescription,
  iconStyle,
  linkStyle,
} from "../styles/FeedDetail.styles";
import { StFeedInfo } from "../styles/Feed.styles";
import { MdArrowBackIos, MdOutlineEditNote } from "react-icons/md";
import { infoDivStyle } from "../styles/FeedDetail.styles";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import EditFeed from "../components/Feed/EditFeed";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

function FeedDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("posts", getPosts);
  const foundPost = data.find((post) => post.id == id);

  const { lockScroll, openScroll } = useBodyScrollLock();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred.</div>;
  }

  const handleOpen = () => {
    lockScroll();
    setIsOpen(true);
  };

  const handleClose = () => {
    openScroll();
    setIsOpen(false);
  };

  return (
    <StContainer
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <div style={iconStyle}>
        <Link to="/feeds" style={linkStyle}>
          <MdArrowBackIos style={{ fontSize: "20px" }} />
        </Link>
        <StPostTitle>{foundPost.title}</StPostTitle>
        <button onClick={handleOpen}>
          <MdOutlineEditNote style={{ fontSize: "30px" }} />
        </button>
      </div>
      <div>
        <StPostDescription>
          <p>{foundPost.description}</p>
        </StPostDescription>
      </div>
      <div style={infoDivStyle}>
        <StFeedInfo>{foundPost.writer}</StFeedInfo>
        <StFeedInfo>{foundPost.date}</StFeedInfo>
      </div>

      {isOpen && <EditFeed isOpen={isOpen} handleClose={handleClose}/>}
    </StContainer>
  );
}

export default FeedDetail;
