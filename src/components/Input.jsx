import { useState } from "react";

export function Input({ todoInputRef, setTodoList }) {
  const [todo, setTodo] = useState("");

  const handleTodoOnChange = (e) => {
    console.log("handleTodoOnChange");
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      todoInputRef.current.focus();
      setTodo("");
      setTodoList((prevTodoList) => {
        return [...prevTodoList, todo];
      });
    }}>
      <input
        ref={todoInputRef}
        type="text"
        value={todo}
        onChange={handleTodoOnChange}
        maxLength={100}
      />
      <button>추가</button>
    </form>
  )
}