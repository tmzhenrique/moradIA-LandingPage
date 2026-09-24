import styled from "styled-components";
import { Titulo } from "../../ComponentesPadrao/Titulo";
import { Texto } from "../../ComponentesPadrao/Texto";

const dados = [
    {
        titulo: '4,8/5',
        subtitulo: 'avaliação média dos usuários'
    },
    {
        titulo: '12 mil+',
        subtitulo: 'matches de cidade gerados'
    },
    {
        titulo: '86%',
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


function DadosAvaliacao(){
    return(
        <DivAvaliacoes>
            {dados.map((dado,index) => (
                <DadoApresentado key={index}>
                    <Titulo tamanho='30px'>{dado.titulo}</Titulo>
                    <Texto tamanho='15px'>{dado.subtitulo}</Texto>
                </DadoApresentado>
            ))}    
        </DivAvaliacoes>
    )
}

export default DadosAvaliacao;