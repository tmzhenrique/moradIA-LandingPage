import styled from "styled-components";
import { Titulo } from "../../ComponentesPadrao/Titulo";
import { Texto } from "../../ComponentesPadrao/Texto";
import { useContagem } from "../../../hooks/useContagem";
import { useVisivel } from "../../../hooks/useVisivel";

const dados = [
    {
        valorFinal: 4.8,
        casasDecimais: 1,
        sufixo: '/5',
        subtitulo: 'avaliação média dos usuários'
    },
    {
        valorFinal: 12,
        casasDecimais: 0,
        sufixo: ' mil+',
        subtitulo: 'matches de cidade gerados'
    },
    {
        valorFinal: 86,
        casasDecimais: 0,
        sufixo: '%',
        subtitulo: 'recomendariam o MoradIA'
    }
]

const DivAvaliacoes = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    gap: 40px
`
const DadoApresentado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

function DadoAvaliacao({ valorFinal, casasDecimais, sufixo, subtitulo }) {
    const [referencia, estaVisivel] = useVisivel();
    const numeroExibido = useContagem({ valorFinal, casasDecimais, iniciar: estaVisivel });

    return (
        <DadoApresentado ref={referencia}>
            <Titulo tamanho='30px'>{numeroExibido}{sufixo}</Titulo>
            <Texto tamanho='15px'>{subtitulo}</Texto>
        </DadoApresentado>
    )
}

function DadosAvaliacao(){
    return(
        <DivAvaliacoes>
            {dados.map((dado,index) => (
                <DadoAvaliacao key={index} {...dado} />
            ))}    
        </DivAvaliacoes>
    )
}

export default DadosAvaliacao;