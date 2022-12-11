import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "../components/Button";

const AddForm = ({ text, setToDo, id, todo }) => {
  // 인풋에 들어가는 값을 새로 지정
  const [toDoValue, setToDoValue] = useState("");

  // 인풋에 들어가는 값이 바뀔때 업데이트
  const onChangeAdd = (event) => {
    setToDoValue(event.target.value);
  };

  // 폼이 서브밋될때 todosubmit함수를 추가한다.
  const AddToDo = (event) => {
    event.preventDefault();
    const toDoSubmit = toDoValue.trim(); //제출시 공백을 없애줌
    if (!AddToDo) {
      //인풋에 값이 없다면, 논리연산자 사용
      setToDoValue(""); //들어가는 값을 빈칸으로 돌려주고 리턴한다.
      return;
    } else {
      //그게 아니라면~ 값을 추가할거야.
      setToDo((prev) => [
        ...prev,
        { title: { todo }, id: { id }, isDone: false },
      ]);
      setToDoValue("");
    }
  };

  console.log(toDoValue);

  return (
    <div>
      <form onSubmit={AddToDo}>
        <label for="hihi">오늘 할 일은?{text}</label>
        <input
          id="hihi"
          type="text"
          placeholder="오늘 할 일을 적으세요."
          onChange={onChangeAdd} //인풋에 값이 들어갈때 업데이트되는 값
          value={toDoValue} // 인풋이 받는 값
        ></input>
        <Button value="작성하기" />
      </form>
    </div>
  );
};

export default AddForm;
