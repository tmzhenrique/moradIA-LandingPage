import styled from "styled-components";
import imagem_mapa from "../../assets/imagem_mapa.jpg";
import imagem_mulher_celular from "../../assets/imagem_mulher_celular.jpeg";
import '../../index.css';
import { Texto } from "../ComponentesPadrao/Texto";
import { Titulo } from "../ComponentesPadrao/Titulo";

const CampoApresentacao = styled.section`
    display: flex;
    padding: 80px 100px;
    gap: 100px;
    align-items: center;
    justify-content: center;
`
const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 636px;
    gap: 32px;
`

const ImagemApresentacao = styled.img`
    width: 580px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
`
const TextosApresentacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const TituloApresentacao = styled.h2`
    margin: 0;
    
    font-family: var(--fonte-moradia);
    font-weight: 800;
    font-size: 56px;
`

const AncorasApresentacao = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const AncoraApresentacaoRoxo = styled.a`
    cursor:pointer;
    display: flex;
    align-items: center;
    text-aling: center;
    border-radius: 12px;
    padding: 16px 32px;
    background-color: var(--roxo-moradia);
    font-family: var(--fonte-moradia);
    color: #FFFF;
    font-weight: 700;
    font-size: 16px;

    &:hover{
        background-color: #EEF2FF;
        color: #4F46E5;
        box-shadow: inset 0 0 0 2px #4F46E5;
    }
`
const AncoraApresentacaoTransparente = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 2px 32px;
    gap: 8px;

    &:hover{    
        border-radius: 12px;
        background-color: rgba(238, 242, 255,0.7); 
    }
`

const AncoraApresentacaoTransparenteTexto = styled.h3`
    font-family: var(--fonte-moradia);
    font-size: 16px;
    font-weight: 600;
    color: var(--roxo-moradia);
`
function Apresentacao({id}){
    return(
        <CampoApresentacao id={id}>
            <DivTextos>
                <TextosApresentacao>
                    <Titulo tamanho='56px' posicao='flex-start' altura='110%'>Encontre a cidade onde sua vida faz mais sentido</Titulo>
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