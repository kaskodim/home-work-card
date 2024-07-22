import styled, { css } from "styled-components";

export const SButton = styled.button<{ type: 'primary' | 'secondary' }>`
    min-width: 86px;
    height: 30px;
    border-radius: 5px;
    background-color:  #4E71FE;
    border: none;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 10px;

${(props) => {
        return props.type === 'secondary' && css`
    background-color: transparent;
    color:#4E71FE;
    border: 2px solid #4E71FE;
    `}}
`