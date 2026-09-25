import styled from "styled-components";
import { Titulo } from "../../ComponentesPadrao/Titulo";
import {Texto} from "../../ComponentesPadrao/Texto"

const DivIndicadores = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    @media (max-width: 64rem){
        flex-wrap: wrap;
    }

    @media (max-width: 48rem){
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }
`
const DivIndividual = styled.div`
    display: flex;
    padding: 1.25rem;
    gap: 1rem;
    max-width: 17rem;
    background-color: #FFFFFF;
    border: solid 0.0625rem #E5E7EB;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 48rem){
        max-width: none;
        justify-content: flex-start;
    }
`

const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media (max-width: 48rem){
        min-width: 0;

        & > h1{
            width: auto !important;
        }
    }
`

const SvgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEF2FF;
    padding: 0.9375rem 0.9375rem;
    border-radius: 0.625rem;
`

function FrameIndicadores({lista}){
    return(
        <DivIndicadores>
            {lista.map((item,index) => (
                <DivIndividual key={index}>
                <SvgDiv>
                    {item.svgSimbolo}
                </SvgDiv>
                <DivTextos>
                    <Titulo tamanho='1rem' peso='700' posicao='flex-start' style={{width: '12.875rem'}}>{item.titulo}</Titulo>
                    <Texto tamanho='0.75rem'>{item.subtitulo}</Texto>
                </DivTextos>  
            </DivIndividual>
            ))}  
        </DivIndicadores>
    )
}

export default FrameIndicadores;