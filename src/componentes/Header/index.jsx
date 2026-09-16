import styled from 'styled-components';
import LogoMoradia from '../ComponentesPadrao/LogoMoradia/index.jsx';

const HeaderLP = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  height: 80px;
  background-color: #FFF;
  border-bottom: solid 1px #E5E7EB; 
`

const DivLinksHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

const AncoraNav = styled.a`
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px 20px;
    color: #6B7280;
    cursor: pointer;

    &:hover{
        border-radius: 8px;
        background-color: rgba(238, 242, 255,0.7); 
    }
`
const AncoraNavDestaque = styled(AncoraNav)`
    color: #FFF;
    font-family: var(--fonte-moradia);
    font-size: 13px;
    font-weight: 600;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: #4F46E5;

    &:hover{
        background-color: #EEF2FF;
        color: #4F46E5;
        box-shadow: inset 0 0 0 2px #4F46E5;
    }
`

function Header(){
    return(
        <HeaderLP>
            <LogoMoradia></LogoMoradia>
            <DivLinksHeader>
                <AncoraNav href="#ComoFunciona">Como funciona</AncoraNav> 
                <AncoraNav href="#Indicadores">Indicadores</AncoraNav>
                <AncoraNav>Preços</AncoraNav>
                <AncoraNavDestaque>Encontrar minha cidade</AncoraNavDestaque>
            </DivLinksHeader>  
        </HeaderLP>
    )
}

export default Header;