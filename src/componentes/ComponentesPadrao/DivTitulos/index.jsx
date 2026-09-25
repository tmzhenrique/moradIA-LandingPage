import styled from "styled-components";
import { Titulo } from "../Titulo";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const FraseSub = styled.p`
    font-family: var(--fonte-moradia);
    color: var(--roxo-moradia);
    font-weight: 700;
    font-size: 0.875rem;
    text-align: center;
`

function DivTitulos({titulo, subtitulo}){
    return(
        <Div>
            <FraseSub>{subtitulo}</FraseSub>
            <Titulo tamanho='2.25rem'>{titulo}</Titulo>
        </Div>
    )
}

export default DivTitulos;