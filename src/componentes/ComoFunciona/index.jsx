import styled from "styled-components";
import { EstiloStrong } from "../ComponentesPadrao/EstiloStrong";
import '../../index.css';
import FrameExplicacoes from "./FrameExplicacoes";
import DivTitulos from "../ComponentesPadrao/DivTitulos";

const ComoFuncionaSection = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #FFFF;
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