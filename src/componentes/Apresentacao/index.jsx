import styled from "styled-components";
import imagem_mulher_celular from "../../assets/imagem_mulher_celular.jpeg";
import '../../index.css';
import { Texto } from "../ComponentesPadrao/Texto";
import { Titulo } from "../ComponentesPadrao/Titulo";

const CampoApresentacao = styled.section`
    display: flex;
    padding: 5rem 6.25rem;
    gap: 6.25rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 64rem){
        flex-direction: column;
        padding: 3.5rem 2rem;
        gap: 3rem;
    }

    @media (max-width: 48rem){
        padding: 2.5rem 1.25rem;
        gap: 2.5rem;
    }
`
const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 39.75rem;
    gap: 2rem;

    @media (max-width: 64rem){
        width: 100%;
        max-width: 39.75rem;
    }
`

const ImagemApresentacao = styled.img`
    width: 36.25rem;
    height: 25rem;
    border-radius: 1.25rem;
    box-shadow: 0.625rem 0.625rem 0.3125rem 0 rgba(0, 0, 0, 0.3);

    @media (max-width: 64rem){
        width: 100%;
        max-width: 36.25rem;
        height: auto;
        aspect-ratio: 36.25 / 25;
        object-fit: cover;
    }
`
const TextosApresentacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const AncorasApresentacao = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 30rem){
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }
`

const AncoraApresentacaoRoxo = styled.a`
    cursor:pointer;
    display: flex;
    align-items: center;
    text-aling: center;
    border-radius: 0.75rem;
    padding: 1rem 2rem;
    background-color: var(--roxo-moradia);
    font-family: var(--fonte-moradia);
    color: #FFFF;
    font-weight: 700;
    font-size: 1rem;

    &:hover{
        background-color: #EEF2FF;
        color: #4F46E5;
        box-shadow: inset 0 0 0 0.125rem #4F46E5;
    }

    @media (max-width: 30rem){
        justify-content: center;
    }
`
const AncoraApresentacaoTransparente = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.125rem 2rem;
    gap: 0.5rem;

    &:hover{    
        border-radius: 0.75rem;
        background-color: rgba(238, 242, 255,0.7);
    }

    @media (max-width: 30rem){
        justify-content: center;
    }
`

const AncoraApresentacaoTransparenteTexto = styled.h3`
    font-family: var(--fonte-moradia);
    font-size: 1rem;
    font-weight: 600;
    color: var(--roxo-moradia);
`
function Apresentacao({id}){
    return(
        <CampoApresentacao id={id}>
            <DivTextos>
                <TextosApresentacao>
                    <Titulo tamanho='3.5rem' posicao='flex-start' altura='110%'>Encontre a cidade onde sua vida faz mais sentido</Titulo>
                    <Texto>Descubra quais cidades combinam com seu estilo de vida, orçamento, objetivos e preferências. Nós analisamos centenas de dados para você morar no lugar certo.</Texto>
                </TextosApresentacao>
                <AncorasApresentacao>
                    <AncoraApresentacaoRoxo>Encontrar minha cidade</AncoraApresentacaoRoxo>
                    <AncoraApresentacaoTransparente>
                        <AncoraApresentacaoTransparenteTexto>Como funciona</AncoraApresentacaoTransparenteTexto>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M3.7995 8H12.2005M7.99998 12.2005L12.2005 8L7.99998 3.79952" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </AncoraApresentacaoTransparente>
                    

                </AncorasApresentacao>
            </DivTextos>
            <ImagemApresentacao src={imagem_mulher_celular} /> 
        </CampoApresentacao>
    )
}

export default Apresentacao