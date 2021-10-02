/* eslint-disable-next-line  */
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import styled from 'styled-components';

const Circle = styled.button`
  background: rgb(127, 203, 207);
  z-index: 5;
  cursor: pointer;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: none;
  position: absolute;
  left: 45%;
  top: 63%;
`;

export default function ToDo() {
  const [Todo, setTodo] = useState(ToDoList);
  const [input, setInput] = useState({
    id: '',
    content: '',
  });
  const { id, content } = input;
  const [appear, setAppear] = useState(false);
  return (
    <div className="wrap">
      <h1>ToDoList</h1>
      {Todo.map((con, i) => {
        return (
          <div>
            <h3>{Todo[i].content}</h3>
          </div>
        );
      })}
      {input}
      {appear === true ? (
        <div>
          <input
            className="push"
            onChange={(e) => {
              setInput({
                id: 4,
                content: '되나',
              });
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                let addTodo = [...Todo, input];
                console.log(addTodo);
                setTodo(addTodo);
              }
            }}
            placeholder="할일을 입력 후 enter를 누르세요"
          />
        </div>
      ) : null}
      <Circle>
        <div
          onClick={() => {
            setAppear(true);
          }}
        >
          😊
        </div>
      </Circle>
    </div>
  );
}
