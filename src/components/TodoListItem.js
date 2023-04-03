import styled from "styled-components";
import { MdOutlineRestoreFromTrash } from "react-icons/md";

const TodoListItemBlock = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background: #f8f9fa;
    }
    & + & {
        border-top: 1px solid #afb3b8;
    }
`
const CheckBox = styled.input`
        cursor: pointer;
        flex: 1;
        display: flex;
        align-items: center;
        svg {
            font-size: 1.5rem;
        }
        .text {
            margin-left: 1rem;
            flex: 1;
        }
        &.checked {
            svg {
                color: #22b8cf 
            }
            .text {
                color: #adb5db;
                text-decoration: line-through;
            }
        }
`

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
        color: #ff8787;
    }
`

const TodoListItem = () => {
    return (
        <TodoListItemBlock>
            <CheckBox type = 'checkbox' />
            <Remove><MdOutlineRestoreFromTrash /></Remove>
        </TodoListItemBlock>
    );
};

export default TodoListItem;