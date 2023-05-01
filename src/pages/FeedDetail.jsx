import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostByID } from "../redux/modules/posts";
import { StContainer } from "../styles/Container.styles";
import { StPostTitle, StPostDescription } from "../styles/FeedDetail.styles";
import { linkStyle } from "../styles/FeedDetail.styles";

function FeedDetail() {
  const posts = useSelector((state) => state.posts.post);
  console.log(posts.title)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

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
      <Link to="/feeds" style={linkStyle}>
        goback
      </Link>
      <StPostTitle>{posts.title}</StPostTitle>
      {/* <StImg /> */}
      <StPostDescription>
        <p>{posts.description}</p>
      </StPostDescription>

      <button onClick={() => alert('수정')}>수정하기</button>
    </StContainer>
  );
}

export default FeedDetail;
