import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const ToggleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.548);
`

const TodoEdit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 0.5rem;
    background-color: pink;
    color: white;
  }
  input {
    margin: 2rem 0;
    padding: 0.5rem;
    border: none;
    outline: none;
    text-align: center;
    border-bottom: 1px solid pink;
  }
  button {
    cursor: pointer;
    background-color: pink;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    &:hover {
      background: #ffadbb;
    }
  }
`

function ToDoEdit({ insertToggle, selectedTodo, onUpdate }) {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
      setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
      (e) => {
        onUpdate(selectedTodo.id, value);
        setValue(''); 
        e.preventDefault();
      },
      [onUpdate, selectedTodo.id, value],
    );
    useEffect(() => {
      if (selectedTodo) {
        setValue(selectedTodo.text);
      }
    }, [selectedTodo]);

    return (
      <ToggleBackground>
        <TodoEdit onSubmit={onSubmit}>
          <h2>수정하기</h2>
          <input onChange={onChange} value={value} placeholder="할 일을 입력하세요" />
          <button type="submit">수정하기</button>
        </TodoEdit>
      </ToggleBackground>
    );
  }
  
  export default ToDoEdit;