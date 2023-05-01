import {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTodoByID } from "../redux/modules/todos";


function FeedDetail() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <div>
      {/* <p>{description}</p> */}
    </div>
  );
}

export default FeedDetail;
