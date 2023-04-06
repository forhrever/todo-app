import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";

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
        flex: 1;
        display: flex;
        align-items: center;
        svg {
            font-size: 1.5rem;
            color: pink;
        }
        &.checked {
            .text {
                color: #adb5bd;
                text-decoration: line-through;
            } // 이거 적용 안되고 있음. 
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

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  color: #ff94a6;
  margin-right: 1rem;
`


const TodoListItem = ({todo, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle}) => {
    const {id, text, checked} = todo;
    return (
        <TodoListItemBlock>
            <CheckBox type='checked' onClick={() => onToggle(id)}>{checked ? <RiHeart3Fill/> : <RiHeart3Line/>}
            {text}
            </CheckBox>
            <Edit onClick={() => { 
            onChangeSelectedTodo(todo); 
            onInsertToggle();
          }}><FaPencilAlt /></Edit>
            <Remove onClick={() => onRemove(id)}><BiTrash /></Remove>
        </TodoListItemBlock>
    );

};

export default TodoListItem;