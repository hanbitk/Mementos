import {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostByID } from "../redux/modules/posts";


function FeedDetail() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostByID(id));
  }, [dispatch, id]);

  return (
    <div>
      {/* <p>{description}</p> */}
    </div>
  );
}

export default FeedDetail;
