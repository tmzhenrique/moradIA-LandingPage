import styled from "styled-components";
import { EstiloStrong } from "../Header";
import '../../index.css';
import FrameExplicacoes from "./FrameExplicacoes";

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

const FraseSub = styled.p`
    font-family: var(--fonte-moradia);
    color: var(--roxo-moradia);
    font-weight: 700;
    font-size: 14px;
    text-align: center;
`
const FrasePrincipal = styled.h2`
    color: #111827;
    font-family: var(--fonte-moradia);
    font-weight: 800;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

function ComoFunciona(){
    return(
        <ComoFuncionaSection>
            <div style={{gap:'30px'}}>
                <FraseSub>MORAR BEM É UMA CIÊNCIA</FraseSub>
                <FrasePrincipal>Como funciona o Morad<EstiloStrong>IA</EstiloStrong>?</FrasePrincipal>
            </div>
            <FrameExplicacoes/>
        </ComoFuncionaSection>
            
        
    )
}

export default ComoFunciona;