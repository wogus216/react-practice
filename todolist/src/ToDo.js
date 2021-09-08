/* eslint-disable-next-line  */
import React, { useState } from 'react';
import ToDoList from './ToDoList';

export default function ToDo() {
  const [text, setText] = useState();
  const change = (e) => {
    setText(e.target.value);
  };
  let lists = [];

  const onClick = (e) => {
    lists.push(text);
    console.log(lists);
  };
  return (
    <div className="content">
      <h1 className="title">ToDoList 만들기</h1>
      <input type="text" className="inputText" onChange={change} value={text} />
      <button onClick={onClick}>추가</button>
      <ToDoList />
    </div>
  );
}
