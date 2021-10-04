/* eslint-disable-next-line  */
import React, { useState, useRef } from 'react';
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
  left: 48%;
  top: 60%;
`;

export default function ToDo() {
  const [TodoList, setTodoList] = useState(ToDoList);
  const [value, setValue] = useState('');
  const [inputs, setInputs] = useState({
    content: '',
  });
  const { content } = inputs;
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const nextId = useRef(4);

  const onCreate = () => {
    const Todo = {
      id: nextId.current,
      content: value,
    };
    setTodoList([...TodoList, Todo]);
    setInputs({
      content: '',
    });
    setValue('');
    nextId.current += 1;
  };

  const [appear, setAppear] = useState(false);

  return (
    <div className="wrap">
      <h1>ToDoList</h1>
      {TodoList.map((con, i) => {
        return (
          <div key={i}>
            <h3
              onClick={() => {
                let newTodoList = [...TodoList];
                newTodoList[i].id = '';
                newTodoList[i].content = '';
                setTodoList(newTodoList);
                console.log(TodoList);
              }}
            >
              {TodoList[i].content}
            </h3>
          </div>
        );
      })}

      {appear === true ? (
        <div>
          <input
            className="push"
            content={content}
            onChange={onChange}
            placeholder="할일을 입력"
            value={value}
          />
          <button onClick={onCreate}>등록</button>
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
