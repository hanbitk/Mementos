import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostByID } from "../redux/modules/posts";
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

function FeedDetail() {
  const post = useSelector((state) => state.posts.post);
  console.log(post.title);
  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(getPostByID(id));
  }, [dispatch, id]);

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
        <StPostTitle>{post.title}</StPostTitle>
        <button onClick={() => alert("수정")}>
          <MdOutlineEditNote style={{ fontSize: "30px" }} />
        </button>
      </div>

      <div>
        <StPostDescription>
          <p>{post.description}</p>
        </StPostDescription>
      </div>
      <div style={infoDivStyle}>
        <StFeedInfo>{post.writer}</StFeedInfo>
        <StFeedInfo>{post.date}</StFeedInfo>
      </div>
    </StContainer>
  );
}

export default FeedDetail;
