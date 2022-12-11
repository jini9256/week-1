import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import "./App.css";

function App() {
  //결과적으로 우리 눈에 보이는 값. 입력값이 보여지는 곳
  const [todos, setTodos] = useState(firstTodos);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = {
      title: title,
      text: text,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => [...prev, newTodos]);
  };

  return (
    <div className="layout">
      <Header title="To Do List 😉" />
      <main className="containerTwo">
        <form onSubmit={handleSubmit} className="form-body">
          <label for="label-text">🔜</label>
          <input
            id="label-text"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>

          <input
            id="label-text"
            placeholder="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button className="btn-style">추가하기</button>
        </form>

        <h2>해야할 일🔥</h2>
        <section>
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <div className="todoBox">
                  <h3>{item.title}</h3>
                  <h4>{item.text}</h4>
                  <button className="btn-style">추가</button>
                  <button className="btn-style">삭제</button>
                </div>
              );
            })}
        </section>
        <h2>완료한 일🤩</h2>
        <section>
          {todos
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <div className="todoBox">
                  <h3>{item.title}</h3>
                  <h4>{item.text}</h4>
                  <button className="btn-style">추가</button>
                  <button className="btn-style">삭제</button>
                </div>
              );
            })}
        </section>
      </main>
    </div>
  );
}

const firstTodos = [
  { title: "12월11일", text: "후발대수업", isDone: false, id: uuidv4() },
  { title: "12월12일", text: "과제완성하기", isDone: true, id: uuidv4() },
  { title: "12월13일", text: "코드리뷰", isDone: true, id: uuidv4() },
];

export default App;
