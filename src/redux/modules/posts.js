import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  posts: [
    {
      id: uuidv4(),
      title: "#Best Memento 1",
      description: "Memento 1",
    },
    {
      id: uuidv4(),
      title: "#Best Memento 2",
      description: "Memento 2",
    },
    {
      id: uuidv4(),
      title: "#Best Memento 3",
      description: "Memento 3",
    },
    {
      id: uuidv4(),
      title: "#Best Memento 4",
      description: "Memento 4",
    },
  ],
  post: {
    id: "0",
    title: "",
    description: "",
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
