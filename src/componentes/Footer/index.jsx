import styled from "styled-components";
import LogoMoradia from "../ComponentesPadrao/LogoMoradia/index.jsx";
import DivsPS from "./DivsPS/index.jsx";
import {Texto} from "../ComponentesPadrao/Texto/index.jsx";

const SectionFooter = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 4rem 5rem 2.5rem 5rem;
    border-top: solid 0.0625rem #E5E7EB;
    gap: 1.875rem;

    @media (max-width: 64rem){
        padding: 3rem 2rem 2rem 2rem;
    }

    @media (max-width: 48rem){
        padding: 2.5rem 1.25rem 1.5rem 1.25rem;
    }
`

const DivsFooter = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 48rem){
        flex-direction: column;
        gap: 2.5rem;
    }
`
const DivSuperiorDireita = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DivSuperiorEsquerda = styled.div`
    display: flex;
    gap: 4rem;

    @media (max-width: 48rem){
        flex-wrap: wrap;
        gap: 2.5rem;
    }
`

const listaFooter = [
    {
        id: 'destaque',
        texto: 'Produto'
    },
    {
        id: 'link',
        texto: 'Funcionalidades',
        link: '#'
    },
    {
        id:'link',
        texto: 'Indicadores',
        link: '#Indicadores',
    },
    {
        id: 'link',
        texto: 'Feedbacks',
        link: '#Depoimentos'
    }
]

const listaFooter2 = [
    {
        id: 'destaque',
        texto: 'Suporte'
    },
    {
        id: 'link',
        texto: 'FAQ',
        link: '#Apresentacao'
    },
    {
        id:'link',
        texto: 'Contato',
        link: '#Indicadores',
    },
    {
        id: 'link',
        texto: 'Termos e Privacidade',
        link: 'https://github.com/tmzhenrique'
    }
]

function Footer(){
    return(
        <SectionFooter>
            <DivsFooter>
                <DivSuperiorDireita>
                    <LogoMoradia tamanhoLogo ={'0.75rem'} posicao ={'flex-start'}></LogoMoradia>
                    <Texto tamanho='0.875rem'>Encontre o melhor lugar para viver com base em <br/>inteligência de dados e estatísticas reais.</Texto>
                </DivSuperiorDireita>
                <DivSuperiorEsquerda>
                            <DivsPS lista={listaFooter} /> 
                            <DivsPS lista= {listaFooter2}/>
                </DivSuperiorEsquerda>
            </DivsFooter>
            <DivsFooter>
                <Texto tamanho='0.875rem' cor='#9CA3AF'>© 2026 MoradIA. Todos os direitos reservados.</Texto> 
            </DivsFooter>     
        </SectionFooter>
    )
}

export default Footer;