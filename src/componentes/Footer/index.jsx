import styled from "styled-components";
import LogoMoradia from "../ComponentesPadrao/LogoMoradia/index.jsx";
import DivsPS from "./DivsPS/index.jsx";
import {Texto} from "../ComponentesPadrao/Texto/index.jsx";

import { Titulo } from "../ComponentesPadrao/Titulo/index.jsx";

const SectionFooter = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 64px 80px 40px 80px;
    border-top: solid 1px #E5E7EB;
    gap: 44px;
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

const DivSvg = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
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
        texto: 'Preços',
        link: '#Apresentacao'
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

const listaLogosFooter = [
    (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0005 4.89144C15.9755 3.9164 16.5006 2.34133 16.5006 2.34133C16.5006 2.34133 15.0755 3.24137 14.2504 3.24137C12.0002 1.14127 8.32494 2.94135 8.99999 6.0915C6.44979 6.1665 3.89958 5.04145 2.24945 3.09136C0.3743 6.54152 2.24945 10.9667 5.99975 12.0918C4.79965 13.1418 3.14952 13.6668 1.49939 13.5918C7.94991 17.867 16.2006 12.3918 15.0005 4.89144Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round"/>
    </svg>
    ),
    (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6259 4.37527H12.6334M4.7503 1H12.2509C14.3221 1 16.0012 2.67907 16.0012 4.7503V12.2509C16.0012 14.3221 14.3221 16.0012 12.2509 16.0012H4.7503C2.67907 16.0012 1 14.3221 1 12.2509V4.7503C1 2.67907 2.67907 1 4.7503 1ZM11.5006 8.02829C11.5932 8.65252 11.4866 9.29005 11.1959 9.85019C10.9053 10.4103 10.4454 10.8646 9.88171 11.1483C9.31802 11.432 8.67923 11.5308 8.05618 11.4305C7.43314 11.3303 6.85757 11.0361 6.41134 10.5899C5.96512 10.1436 5.67095 9.56807 5.5707 8.94502C5.47044 8.32198 5.56919 7.68318 5.85291 7.1195C6.13663 6.55581 6.59087 6.09594 7.15101 5.80529C7.71115 5.51464 8.34868 5.40802 8.97292 5.50059C9.60966 5.59501 10.1992 5.89171 10.6543 6.34688C11.1095 6.80205 11.4062 7.39154 11.5006 8.02829Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round"/>
    </svg>
    ),
    (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6831 6.81826C13.8391 5.97432 12.6944 5.50019 11.5008 5.50019C10.3073 5.50019 9.16259 5.97432 8.3186 6.81826C7.47462 7.66221 7.00048 8.80685 7.00048 10.0004V15.2506H10.0007V10.0004C10.0007 9.60254 10.1588 9.22099 10.4401 8.93967C10.7214 8.65836 11.103 8.50032 11.5008 8.50032C11.8987 8.50032 12.2803 8.65836 12.5616 8.93967C12.8429 9.22099 13.001 9.60254 13.001 10.0004V15.2506H16.0012V10.0004C16.0012 8.80685 15.5271 7.66221 14.6831 6.81826Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round"/>
            <path d="M4.00024 6.25022H1V15.2506H4.00024V6.25022Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round"/>
            <path d="M2.50012 4.00013C3.32861 4.00013 4.00024 3.32853 4.00024 2.50006C4.00024 1.6716 3.32861 1 2.50012 1C1.67163 1 1 1.6716 1 2.50006C1 3.32853 1.67163 4.00013 2.50012 4.00013Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round"/>
        </svg>
    )

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
                <DivSvg>
                    {listaLogosFooter.map((elemento,index) => (
                    <div key={index}>
                        {elemento}
                    </div>
                ))}   
                </DivSvg>         
            </DivsFooter>     
        </SectionFooter>
    )
}

export default Footer;