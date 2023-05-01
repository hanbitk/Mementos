import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
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
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action)
      return [...state, action.payload];
    },
  },
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;
