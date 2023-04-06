import styled from "styled-components";
import TodoListItem from "./TodoListItem";


const TodoListBlock = styled.div`
    min-height: 500px;
    max-height: 513px;
    overflow-y: auto;
`

const TodoList = ({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) => {
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>
            ))}
        </TodoListBlock>
    );
};

export default TodoList;