import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListBlock = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`

const TodoList = ({ todos }) => {
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </TodoListBlock>
    );
};

export default TodoList;