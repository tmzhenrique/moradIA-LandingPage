import styled from "styled-components";

export const Titulo = styled.h1`
    color: var(--preto-titulo);
    font-family: var(--fonte-moradia);
    font-weight: ${props => props.peso || '800'};
    font-size: ${props => props.tamanho || '32px'};
    text-align: ${props => props.posicao || 'center'};
    margin: ${props => props.margin || '0'};
    line-height: ${props => props.altura || '100%'};
`