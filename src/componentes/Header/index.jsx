import styled from 'styled-components';
import LogoMoradia from '../ComponentesPadrao/LogoMoradia/index.jsx';

const HeaderLP = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.25rem;
  height: 5rem;
  background-color: #FFF;
  border-bottom: solid 0.0625rem #E5E7EB;

  @media (max-width: 64rem){
    padding: 0 2rem;
  }

  @media (max-width: 48rem){
    flex-direction: column;
    height: auto;
    padding: 1rem 1.25rem;
    gap: 0.75rem;
  }
`

const DivLinksHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4375rem;

    @media (max-width: 48rem){
        flex-wrap: wrap;
        justify-content: center;
    }
`

const AncoraNav = styled.a`
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.625rem 1.25rem;
    color: #6B7280;
    cursor: pointer;

    &:hover{
        border-radius: 0.5rem;
        background-color: rgba(238, 242, 255,0.7);
    }

    @media (max-width: 30rem){
        padding: 0.5rem 0.75rem;
    }
`
const AncoraNavDestaque = styled(AncoraNav)`
    color: #FFF;
    font-family: var(--fonte-moradia);
    font-size: 0.8125rem;
    font-weight: 600;
    border-radius: 0.5rem;
    padding: 0.625rem 1.25rem;
    background-color: #4F46E5;

    &:hover{
        background-color: #EEF2FF;
        color: #4F46E5;
        box-shadow: inset 0 0 0 0.125rem #4F46E5;
    }

    @media (max-width: 30rem){
        padding: 0.5rem 0.75rem;
    }
`

function rolarParaSecao(evento, ancora) {
    evento.preventDefault();
    const secao = document.querySelector(ancora);
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function Header(){
    return(
        <HeaderLP>
            <LogoMoradia></LogoMoradia>
            <DivLinksHeader>
                <AncoraNav href="#ComoFunciona" onClick={(evento) => rolarParaSecao(evento, '#ComoFunciona')}>Como funciona</AncoraNav> 
                <AncoraNav href="#Indicadores" onClick={(evento) => rolarParaSecao(evento, '#Indicadores')}>Indicadores</AncoraNav>
                <AncoraNav href='#Depoimentos'  onClick={(evento) => rolarParaSecao(evento, '#Depoimentos')}>Feedbacks</AncoraNav>
                <AncoraNavDestaque>Encontrar minha cidade</AncoraNavDestaque>
            </DivLinksHeader>  
        </HeaderLP>
    )
}

export default Header;