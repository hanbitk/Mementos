import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const getCurrentDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `0${day}.0${month}.${year}`;

  return currentDate;
};

const initialState = {
  posts: [
    {
      id: uuidv4(),
      title: "Best Memento 1",
      description: "Memento 1",
      writer: "user1",
      date: getCurrentDate()
    },
    {
      id: uuidv4(),
      title: "Best Memento 2",
      description: "Memento 2",
      writer: "user2",
      date: getCurrentDate()
    },
    {
      id: uuidv4(),
      title: "Best Memento 3",
      description: "Memento 3",
      writer: "user3",
      date: getCurrentDate()
    },
    {
      id: uuidv4(),
      title: "Best Memento 4",
      description: "Memento 4",
      writer: "user4",
      date: getCurrentDate()
    },
  ],
  post: {
    id: "0",
    title: "",
    description: "",
    writer: "",
    date: getCurrentDate(),
  }
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return{
        ...state,
        posts: [...state.posts, action.payload],
      }
    },
    deletePost: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      }; 
    },
    getPostByID: (state, action) => {
      return {
        ...state,
        post: state.posts.find((post) => {
          return post.id === action.payload;
        }),
      };
    },
  },
});

export default postsSlice.reducer;
export const { addPost, deletePost, getPostByID } = postsSlice.actions;
