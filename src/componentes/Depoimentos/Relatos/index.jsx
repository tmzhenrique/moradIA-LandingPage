import styled from "styled-components"
import { Texto } from "../../ComponentesPadrao/Texto"
import { Titulo } from "../../ComponentesPadrao/Titulo"

const listaRelatos = [
    {
        mensagemMatch: '● 94% de match com Florianópolis',
        avaliacao: 'teste',
        comentario: 'Eu tinha três cidades na cabeça e nenhum critério claro pra decidir. O relatório mostrou que meu orçamento rendia muito mais em Floripa do que eu imaginava, considerando saúde e mobilidade.',
        nome: 'Lucas Maciel',
        sigla: 'LM',
        descricao: 'Petista, mudou de Pelotas - RS'
    },
    {
        mensagemMatch: '● 89% de match com Curitiba',
        avaliacao: 'teste',
        comentario: 'O que mais pesou pra mim foi ver segurança e mercado de trabalho lado a lado. Consegui justificar a mudança pra família com números, não só com a sensação de "acho que vai ser bom".',
        nome: 'Rafael Mariano',
        sigla: 'RM',
        descricao: 'Advogato, mudou do Rio',
    },
    {
        mensagemMatch: '● 97% de match com Recife',
        avaliacao: 'teste',
        comentario: 'Achei que ia levar semanas pesquisando cidade por cidade. Em uma tarde eu já tinha um ranking, comparei os três primeiros colocados e fechei a mudança com muito mais tranquilidade.',
        nome: 'Vitor Strauss',
        sigla: 'VS',
        descricao: 'Economista, mudou de Brasília'
    }
]

const DivTodosRelatos = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`

const DivRelato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    background-color: #FFFF;
    border-radius: 20px;
    width: 300px;
    border: solid 1px #E5E7EB;
`

const Match = styled.p`
    font-family: var(--fonte-moradia);
    color: var(--roxo-moradia);
    font-size: 13px;
    text-align: center;
    font-weight: 700;
    width: 75%;
    padding: 7px 0.5rem;
    background-color: #EFEDFF;
    border-radius: 15px;
`
const DivPerfil = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    border-top: solid 1px #E5E7EB;
    gap: 7px;
    margin-top: auto;
`
const DivPerfilMenor = styled.div`
    display: flex;
    flex-direction: column;
`

const Sigla = styled.h2`
    display: flex;
    font-family: var(--fonte-moradia);
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    color: #FFFF;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--roxo-moradia);
`
function Relatos(){
    return(
        <DivTodosRelatos>
            {listaRelatos.map((relato,index) => (
                <DivRelato key={index}>
                        <Match>{relato.mensagemMatch}</Match>
                        <svg xmlns="http://w3.org" viewBox="0 0 130 24" width="100px" height="18px">
                            <defs>
                                <g id="star">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FFD700"/>
                                </g>
                            </defs>
                            <use href="#star" x="0" y="0" />
                            <use href="#star" x="26" y="0" />
                            <use href="#star" x="52" y="0" />
                            <use href="#star" x="78" y="0" />
                            <use href="#star" x="104" y="0" />
                        </svg>
                        <Texto  cor='#14152B' tamanho='15px'>{relato.comentario}</Texto>
                        <DivPerfil>
                            <Sigla>{relato.sigla}</Sigla>
                            <DivPerfilMenor>
                                <Titulo posicao='flex-start' tamanho='18px'>{relato.nome}</Titulo>
                                <Texto tamanho='14px'>{relato.descricao}</Texto>
                            </DivPerfilMenor>
                        </DivPerfil>
                </DivRelato>
            ))}
        </DivTodosRelatos>
    )
}

export default Relatos;