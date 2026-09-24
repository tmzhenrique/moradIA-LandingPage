import styled from "styled-components";
import LogoMoradia from "../ComponentesPadrao/LogoMoradia/index.jsx";
import DivsPS from "./DivsPS/index.jsx";
import {Texto} from "../ComponentesPadrao/Texto/index.jsx";

const SectionFooter = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 64px 80px 40px 80px;
    border-top: solid 1px #E5E7EB;
    gap: 30px;
`

const DivsFooter = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
const DivSuperiorDireita = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const DivSuperiorEsquerda = styled.div`
    display: flex;
    gap: 64px;
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
                    <LogoMoradia tamanhoLogo ={'12px'} posicao ={'flex-start'}></LogoMoradia>
                    <Texto tamanho='14px'>Encontre o melhor lugar para viver com base em <br/>inteligência de dados e estatísticas reais.</Texto>
                </DivSuperiorDireita>
                <DivSuperiorEsquerda>
                            <DivsPS lista={listaFooter} /> 
                            <DivsPS lista= {listaFooter2}/>
                </DivSuperiorEsquerda>
            </DivsFooter>
            <DivsFooter>
                <Texto tamanho='14px' cor='#9CA3AF'>© 2026 MoradIA. Todos os direitos reservados.</Texto> 
            </DivsFooter>     
        </SectionFooter>
    )
}

export default Footer;