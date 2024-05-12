import React, { memo } from "react";

const Todo = memo(({ index, todoInfo, successTodo }) => {
  
  const handleSuccessTodo = () => {
    console.log('child - handleSuccessTodo')
    successTodo(index);
  };

  return (
      <li>
        <div>{todoInfo}</div>
        <div><button onClick={handleSuccessTodo}>완료</button></div>
      </li>
  );
});

Todo.displayName = "Todo";
export default Todo;
