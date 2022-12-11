import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "../src/components/Header";
import AddForm from "../src/components/AddForm";
import ToDoItem from "../src/components/ToDoItem";

function App() {
  const [toDo, setToDo] = useState("newToDo");

  const newToDo = [
    { id: uuid(), todo: "리액트", isDone: false },
    { id: uuid(), todo: "타임스크립트", isDone: false },
    { id: uuid(), todo: "자바스크립트", isDone: false },
  ];

  return (
    <div className="layout">
      <Header title="TODAY's To-Do List"></Header>

      <AddForm setToDo={setToDo}></AddForm>

      <ToDoItem name="active" toDo={toDo} setToDo={setToDo} />
      <ToDoItem name="done" toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
<div></div>;
