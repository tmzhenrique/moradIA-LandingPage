import styled from "styled-components";

export const Texto = styled.p`
    font-family: var(--fonte-moradia);
    text-align: left;
    font-weight: 400;
    font-size: ${props => props.tamanho || '18px'};
    color: #6B7280;
`