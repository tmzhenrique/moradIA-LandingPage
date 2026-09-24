import DivTitulos from "../../ComponentesPadrao/DivTitulos";
import { Texto } from "../../ComponentesPadrao/Texto";
import styled from "styled-components";

const DivTituloDepoimentos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

function TituloDepoimentos(){
    return(
        <DivTituloDepoimentos>
            <DivTitulos
                titulo='Pessoas reais, decisões mais seguras'
                subtitulo='QUEM JÁ ENCONTROU SUA CIDADE'
            >
            </DivTitulos>
            <Texto posicao='center'>Veja como o match de dados ajudou outras pessoas a escolher onde morar com mais confiança.</Texto>
        </DivTituloDepoimentos>
    )
}

export default TituloDepoimentos;