import styled from "styled-components";

export const Titulo = styled.h1`
    color: ${props => props.cor || 'var(--preto-titulo)'};
    font-family: var(--fonte-moradia);
    font-weight: ${props => props.peso || '800'};
    font-size: ${props => props.tamanho || '2rem'};
    text-align: ${props => props.posicao || 'center'};
    margin: ${props => props.margin || '0'};
    line-height: ${props => props.altura || '100%'};

    @media (max-width: 48rem){
        font-size: ${props => `min(${props.tamanho || '2rem'}, max(calc(${props.tamanho || '2rem'} * 0.7), 1.75rem))`};
    }
`