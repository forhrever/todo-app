import styled from "styled-components"

const TodoTemplateBlock = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;
` 

const AppTittle = styled.div`
    background: #15f396;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    background: white;
`

const TodoTemplate = ({ children }) => {
    return (
        <TodoTemplateBlock>
            <AppTittle>To Do List</AppTittle>
            <Content>{children}</Content>
        </TodoTemplateBlock>
    );
};

export default TodoTemplate;