import React, { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Todoboard from "./components/Todoboard";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  // 서브밋되었을때 출력되는 화면을 먼저 만들어보자
  const [todos, setTodos] = useState(iniTodos);

  return (
    <div>
      <Header header="🍀 Todo List" />
      {/* <header>헤더야</header> */}
      <main>
        {/* 인풋값이 쓰여지는 부분 */}
        <AddForm setTodos={setTodos} />

        {/* 서브밋되서 화면에 받아오는 부분 */}
        <div className="board-row">
          <Todoboard todos={todos} setTodos={setTodos} isWork={true} />
          <Todoboard todos={todos} setTodos={setTodos} isWork={false} />
        </div>
      </main>
    </div>
  );
}

//복잡한 값이니까 아래로 내려놓자
const iniTodos = [
  { title: "오늘 과제는?", text: "과제만들기", isDone: false, id: uuidv4() },
  { title: "오늘 뭐 먹지?", text: "롤리폴리", isDone: false, id: uuidv4() },
  { title: "오늘 커피는?", text: "2잔 마심", isDone: true, id: uuidv4() },
];

export default App;
