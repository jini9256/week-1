import React from "react";

function Todo({ item, isWork, setTodos }) {
  const deleteClick = () => {
    //인덱스값에 의해 필터링되는 값이 딜레이트..된다고 보면된다.
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  //이 부분이 최대 난제....화이팅
  const switchClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div key={item.id} className="todoitem">
      <h2>{item.title}</h2>
      <p>{item.text}</p>

      <div>
        <button className="btn-style" onClick={switchClick}>
          {/* 삼항연산자로 버튼이름을 바꿔준다 */}
          {isWork ? "완료" : "취소"}
        </button>
        <button className="btn-style" onClick={deleteClick}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default Todo;
