import React, { useState, useRef } from "react";
import Todo from "./Todo";
import { Input } from "./Input";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const todoInputRef = useRef(null);

  const successTodo = (index) => {
    console.log(`index : ${index}`);
    const updateTodoList = todoList.filter((_, i) => index !== i);
    setTodoList(updateTodoList)
  }

  return (
    <>
      <h3>할일 목록</h3>
      <Input todoInputRef={todoInputRef} setTodoList={setTodoList} />
      {todoList.length > 0 && (
        <ul>
          {todoList.map((todo, i) => {
            return (
                <Todo
                  key={`할일_${i}`}
                  index={i}
                  todoInfo={todo}
                  successTodo={successTodo}
                />
              ) 
          })}
        </ul>
      )}
    </>
  );
}

export default TodoList;
