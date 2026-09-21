<<<<<<< HEAD
import DivTitulos from "../ComponentesPadrao/DivTitulos";


function Indicadores(){
    return(
       <DivTitulos
        titulo={'O que nós analisamos'}
        subtitulo={'DADOS QUE IMPORTAM'}
       ></DivTitulos>
=======
import styled from "styled-components";
import DivTitulos from "../ComponentesPadrao/DivTitulos";
import FrameIndicadores from "./FrameIndicadores";
import { listaIndicadores } from "./FrameIndicadores/ListaIndicadores/listaIndicadores1";
import { listaIndicadores2 } from "./FrameIndicadores/ListaIndicadores/listaIndicadores2";

const SectionIndicadores = styled.section`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: 96px 80px;
    gap: 64px;
    justify-content: center;
`

const DivIndicadores = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
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
>>>>>>> dev
    )
}

export default Indicadores;