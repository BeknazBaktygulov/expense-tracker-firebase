import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./store/counterSlice";
import { todoActions } from "./store/todoSlice";

// 1. useSelector - hook to pull data from Redux store
// 2. useDispatch - hook to fire action

const App = () => {
  const [count, setCount] = useState(0);

  const [todoInputText, setTodoInputText] = useState("");

  const reduxCount = useSelector(selectCount);
  const todoList = useSelector((state) => state.todo.todoListFromRedux);

  const dispatch = useDispatch();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const handleAddingTodo = () => {
    dispatch(
      todoActions.addTodo({
        todo: todoInputText,
      })
    );
    setTodoInputText("");
  };

  return (
    <>
      <div className="App">
        <h1>This is useState counter</h1>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <div className="App">
        <h1>This is Redux counter</h1>
        <h1>{reduxCount}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className="App">
        <h1>Todo List</h1>
        {todoList.map((item, index) => (
          <div key={index}>
            <h2>{item.todo}</h2>
          </div>
        ))}
        <input
          type="text"
          placeholder="Type todo here..."
          value={todoInputText}
          onChange={(e) => setTodoInputText(e.target.value)}
        />
        <button onClick={() => handleAddingTodo()}>Add todo</button>
      </div>
    </>
  );
};

export default App;
