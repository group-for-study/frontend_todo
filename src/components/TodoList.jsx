import React, { useState, useRef } from "react";
import { Todo } from "./Todo";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoInputRef = useRef(null);

  const successTodo = (successTodo) => {
    console.log(`successTodo : ${successTodo}`);
    const updateTodoList = todoList.filter((todo) => todo !== successTodo);
    setTodoList(updateTodoList)
  }

  const addTodo = (e) => {
    e.preventDefault();
    console.log("handleOnTodoSubmit");
    todoInputRef.current.focus();
    setTodo("");
    setTodoList((prevTodoList) => {
      return [...prevTodoList, todo];
    });
  };

  return (
    <>
      <h3>할일 목록</h3>
      <form onSubmit={addTodo}>
        <input
          ref={todoInputRef}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          maxLength={100}
        />
        <button>추가</button>
      </form>
      {todoList.length > 0 && (
        <ul>
          {todoList.map((todo, i) => (
            <Todo
              key={`할일_${i}`}
              todoInfo={todo}
              buttons={<div><button onClick={() => successTodo(todo)}>완료</button></div>}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
