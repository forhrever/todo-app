import styled from "styled-components";
import { MdAdd } from 'react-icons/md';

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
const TodoInsert = () => {
    return (
        <TodoInsertBlock>
            <input placeholder="일정을 입력하세요." />
            <button type="submit"><MdAdd /></button>
        </TodoInsertBlock>
    );
};

export default TodoInsert;