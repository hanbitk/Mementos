import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
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
  todo: {
    id: "0",
    title: "",
    description: "",
  }
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return{
        ...state,
        todos: [...state.todos, action.payload],
      }
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }; 
    },
    getTodoByID: (state, action) => {
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, getTodoByID } = todosSlice.actions;
