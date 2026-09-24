import Relatos from "./Relatos/index";
import TituloDepoimentos from "./TituloDepoimentos/index";
import DadosAvaliacao from "./DadosAvaliacao/index"
import styled from "styled-components";


const SectionDepoimentos = styled.section`
    display: flex; 
    flex-direction: column;
    padding: 50px;
    gap: 15px;
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