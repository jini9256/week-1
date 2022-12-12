import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitClick = (event) => {
    event.preventDefault();
    // console.log("hihi");
    const newTodos = {
      title: title,
      text: text,
      isDone: false,
      id: uuidv4(),
    };
    setTodos((prev) => {
      return [...prev, newTodos];
    });
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="add-form">
      <form onSubmit={submitClick}>
        <label for="label">제목</label>
        <input
          id="label"
          value={title}
          onChange={titleChange}
          placeholder="제목을 적으세요."
        ></input>
        <label for="label-two">할일</label>
        <input
          id="label-two"
          value={text}
          onChange={textChange}
          placeholder="내용을 적으세요."
        ></input>
        <button className="btn-style">추가</button>
      </form>
    </div>
  );
}

export default AddForm;
