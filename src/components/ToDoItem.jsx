import React, { useState } from "react";
import Button from "./Button";
import Todo from "./Todo";

function ToDoItem({ toDo, setToDo, name }) {
  return (
    <div>
      <h2>Done or Working</h2>

      {toDo.Todo.map((item) => {})}
      <Button value="완료"></Button>
      <Button value="삭제"></Button>
    </div>
  );
}

export default ToDoItem;
