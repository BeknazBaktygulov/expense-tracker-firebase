import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoListFromRedux: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoListFromRedux.push(action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
