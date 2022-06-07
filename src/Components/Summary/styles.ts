import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;
    overflow-x: scroll;
    ::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: .25rem;
        color: var(--text-title);
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            display: block;
        }
        &.highlight-background{
            background-color: var(--green);
            color: var(--shape);
        }
    }
`;