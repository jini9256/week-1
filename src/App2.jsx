import React, { useState } from "react";

function App() {
  const [inputTodo, setTodo] = useState(""); //인풋값을 받아오기(?)
  const [toDos, setToDos] = useState([]); //todo를 받을수있는 배열을 만들건데 기본값으로 비어있어야하니 빈 공간

  const onChange = (event) => {
    let newTodo = event.target.value;
    setTodo(newTodo);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)

    if (inputTodo === "") {
      return;
    }
    setTodo(""); //js면 푸쉬로 추가해주겠지만 state는 수정불가야.
    //대신 함수를 사용해서 수정을 한다. 절대 직접적으로 수정안함

    setToDos((currentArray) => [inputTodo, ...currentArray]);

    //console.log(toDos);찍어보면 빈 배열값이 나온다.
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write..."
          onChange={onChange}
          value={inputTodo}
        ></input>
        <button>추가</button>
      </form>

      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
