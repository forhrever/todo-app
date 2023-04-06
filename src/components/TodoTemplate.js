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
    background: pink;
    color: white;
    height: 6rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-googlePacifico);
`
const Content = styled.div`
    background: #ffe1e1;
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