import styled from "styled-components"
import logo from '../../../assets/MoradIALogo.svg'

const MoradIA = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: ${props => props.alinhamento || 'center'};
    gap: 8px;
`

const TextoMoradIA = styled.h2`
    font-weight: 700;
    font-family: var(--fonte-moradia);
    margin: 0;
    color:black;
    font-size: ${props => props.tamanho || '20px'}
`
const LogoMoradIA = styled.img`
    padding: 5px;
    border-radius: 7px;
    background-color: #4F46E5;
    width: ${props => props.tamanhoImg || '20px'};
    height: ${props => props.tamanhoImg || '20px'};`

export const EstiloStrong = styled.strong`
    color: #4F46E5;
`

function LogoMoradia({tamanhoLogo,posicao}){
    return(
        <MoradIA
            alinhamento={posicao}>
            <LogoMoradIA src={logo} tamanhoImg={tamanhoLogo}></LogoMoradIA>
            <TextoMoradIA>Morad<EstiloStrong>IA</EstiloStrong></TextoMoradIA>
    </MoradIA> 
    )    
}

export default LogoMoradia;