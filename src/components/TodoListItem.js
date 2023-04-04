import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";

const TodoListItemBlock = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & + & {
        border-top: 1px solid #afb3b8;
    }
`
const CheckBox = styled.div`
        cursor: pointer;
        display: flex;
        align-items: center;
        svg {
            font-size: 1.5rem;
            color: pink;
        }
        .text {
            margin-left: 2rem;
            flex: 1;
        }
        &.checked {
            .text {
                color: #adb5bd;
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


const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <TodoListItemBlock>
            <CheckBox>{checked ? <RiHeart3Fill/> : <RiHeart3Line/>}{text}</CheckBox>
            <Remove><BiTrash /></Remove>
        </TodoListItemBlock>
    );

};

export default TodoListItem;