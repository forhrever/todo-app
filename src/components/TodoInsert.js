import styled from "styled-components";
import { MdAdd } from 'react-icons/md';
import { useState, useCallback } from "react";

const TodoInsertBlock = styled.div`
    display: flex;
    background: #ffffff;
    justify-content: space-between;
input {
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: black;
  &::placeholder {
    color: #000000;
  }
}

button {
  background: none;
  outline: none;
  border: none;
  background: #868E96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: 0.1s background ease-in;
  &:hover {
    background: #c2c8ce;
  }
}
`
const TodoInsert = ({onInsert}) => {
  const [ value, setValue ] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
        <TodoInsertBlock>
            <input placeholder="일정을 입력하세요." value = {value} onChange={onChange}/>
            <button type="submit"><MdAdd /></button>
        </TodoInsertBlock>
        </form>
    );
};

export default TodoInsert;