import React, { useState } from "react";

const Todo = ({ title, text, todos }) => {
  return (
    <>
      <h2>해야할 일</h2>
      <section>
        {todos
          .filter((item) => item.isDone === false)
          .map((item) => {
            return (
              <div>
                <h3>{item.title}</h3>
                <h4>{item.text}</h4>
                <button>추가</button>
                <button>삭제</button>
              </div>
            );
          })}
      </section>
      <h2>완료한 일</h2>
      <section>
        {todos
          .filter((item) => item.isDone === true)
          .map((item) => {
            return (
              <div>
                <h3>{item.title}</h3>
                <h4>{item.text}</h4>
                <button>추가</button>
                <button>삭제</button>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Todo;
