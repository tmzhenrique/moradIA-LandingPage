import styled from "styled-components";
import { EstiloStrong } from "../Header";
import '../../index.css';
import FrameExplicacoes from "./FrameExplicacoes";
import DivTitulos from "../ComponentesPadrao/DivTitulos";

const ComoFuncionaSection = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #FFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: 96px 80px;
    gap: 64px;
    justify-content: center;
`   

function ComoFunciona({id}){
    return(
        <ComoFuncionaSection id={id}>
            <DivTitulos
                subtitulo={'MORAR BEM É UMA CIÊNCIA'}
                titulo={
                    <>Como funciona o Morad<EstiloStrong>IA</EstiloStrong>?</>
                }
            ></DivTitulos>
            <FrameExplicacoes/>
        </ComoFuncionaSection> 
    )
}

export default ComoFunciona;