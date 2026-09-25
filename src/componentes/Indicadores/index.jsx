import styled from "styled-components";
import DivTitulos from "../ComponentesPadrao/DivTitulos";
import FrameIndicadores from "./FrameIndicadores";
import { listaIndicadores } from "./FrameIndicadores/ListaIndicadores/listaIndicadores1";
import { listaIndicadores2 } from "./FrameIndicadores/ListaIndicadores/listaIndicadores2";

const SectionIndicadores = styled.section`
    display: flex;
    flex-direction: column;
    border-top: 0.0625rem solid #E5E7EB;
    border-bottom: 0.0625rem solid #E5E7EB;
    padding: 6rem 5rem;
    gap: 4rem;
    justify-content: center;

    @media (max-width: 64rem){
        padding: 4rem 2rem;
        gap: 3rem;
    }

    @media (max-width: 48rem){
        padding: 3rem 1.25rem;
        gap: 2.5rem;
    }
`

const DivIndicadores = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
`

function Indicadores({id}){
    return(
        <SectionIndicadores id={id}>
            <DivTitulos
                titulo={'O que nós analisamos'}
                subtitulo={'DADOS QUE IMPORTAM'}
            ></DivTitulos>
            <DivIndicadores>
                <FrameIndicadores lista = {listaIndicadores}/>
                <FrameIndicadores lista = {listaIndicadores2}/>
            </DivIndicadores>      
        </SectionIndicadores>
    )
}

export default Indicadores;