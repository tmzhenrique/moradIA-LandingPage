import Relatos from "./Relatos/index";
import TituloDepoimentos from "./TituloDepoimentos/index";
import DadosAvaliacao from "./DadosAvaliacao/index"
import styled from "styled-components";


const SectionDepoimentos = styled.section`
    display: flex; 
    flex-direction: column;
    padding: 3.125rem;
    gap: 0.9375rem;

    @media (max-width: 64rem){
        padding: 3.125rem 2rem;
    }

    @media (max-width: 48rem){
        padding: 3rem 1.25rem;
    }
`

function Depoimentos({id}){
    return(
        <SectionDepoimentos id={id}>
            <TituloDepoimentos/>
            <Relatos/>
            <DadosAvaliacao/>
        </SectionDepoimentos>
    )
}

export default Depoimentos;