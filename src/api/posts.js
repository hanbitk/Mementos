// axios 요청이 들어가는 모든 module
import axios from "axios";

// Read
const getPosts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/posts`
    );
    return response.data;
  } catch(err){
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

// Create
const addPost = async (newPost) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
  } catch {
    console.log("포스트 추가 오류");
  }
};

// Delete
const deletePost = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
  } catch {
    console.log("포스트 삭제 오류");
  }
};

// Update
const updatePost = async ({ id, description }) => {
  try {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, {
      description,
    });
  } catch {
    console.log("포스트 수정 오류");
  }
};

export { getPosts, addPost, deletePost, updatePost };
