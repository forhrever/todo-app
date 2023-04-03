import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListBlock = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`

const TodoList = () => {
    return (
        <TodoListBlock>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </TodoListBlock>
    );
};

export default TodoList;