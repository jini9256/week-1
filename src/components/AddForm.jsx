import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "../components/Button";

const AddForm = ({ toDo, setToDo }) => {
  const [input, setInput] = useState("");

  // 인풋값이 바뀔때 '인풋'이라는 값으로 업데이트되도록함
  const ChangeMode = (e) => {
    setInput(e.target.value);
  };

  const addInput = (event) => {
    event.preventDefault();
    const newInput = input.trim();
    // console.log(input);

    if (!newInput) {
      setInput("");
      return;
    }
    setToDo((prev) => [...prev, { toDo, isDone: false, id: uuid() }]);

    setInput("");
  };

  return (
    <div className="form-body">
      <form onSubmit={addInput}>
        <label for="label-text">오늘은 뭐하지?</label>
        <input
          placeholder="오늘의 일정"
          type="text"
          id="label-text"
          onChange={ChangeMode}
          value={input}
        ></input>

        <Button value="작성하기" />
      </form>
    </div>
  );
};

export default AddForm;
