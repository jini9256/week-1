import React from "react";
import Todo from "./Todo";

function Todoboard({ todos, setTodos, isWork }) {
  return (
    <div className="todobox">
      <h2>{isWork ? "해야할 일" : "완료한 일"}</h2>

      {todos
        .filter((item) => item.isDone === !isWork)
        .map((item) => {
          return <Todo item={item} isWork={isWork} setTodos={setTodos} />;
        })}
    </div>
  );
}

export default Todoboard;
