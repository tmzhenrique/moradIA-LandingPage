import styled from "styled-components";
import { Titulo } from "../../ComponentesPadrao/Titulo";
import {Texto} from "../../ComponentesPadrao/Texto"
import { listaIndicadores } from "./ListaIndicadores/listaIndicadores1";

const DivIndicadores = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
`
const DivIndividual = styled.div`
    display: flex;
    padding: 20px;
    gap: 16px;
    max-width: 272px;
    background-color: #FFFFFF;
    border: solid 1px #E5E7EB;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
`

const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const SvgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEF2FF;
    padding: 15px 15px;
    border-radius: 10px;
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
                    <Titulo tamanho='16px' peso='700' posicao='flex-start' style={{width: '206px'}}>{item.titulo}</Titulo>
                    <Texto tamanho='12px'>{item.subtitulo}</Texto>
                </DivTextos>  
            </DivIndividual>
            ))}  
        </DivIndicadores>
    )
}

export default FrameIndicadores;