import React from 'react';

export default function ToDoList() {
  let arr = ['menu1', 'menu1', 'menu1', 'menu1', 'menu1'];

  console.log(arr);
  return (
    <div className="listWrap">
      <ul>
        {arr.map((arr) => (
          <div>
            <li>{arr}</li>
            <button>삭제</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
