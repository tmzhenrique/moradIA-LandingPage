import styled from "styled-components";

export const Texto = styled.p`
    font-family: var(--fonte-moradia);
    text-align: ${props => props.posicao || 'left'} ;
    font-weight: 400;
    font-size: ${props => props.tamanho || '1.125rem'};
    color: ${props => props.cor || '#6B7280'};
`