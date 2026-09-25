import styled from "styled-components"
import logo from '../../../assets/MoradIALogo.svg'
import { EstiloStrong } from "../EstiloStrong"

const MoradIA = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: ${props => props.alinhamento || 'center'};
    gap: 0.5rem;
`

const TextoMoradIA = styled.h2`
    font-weight: 700;
    font-family: var(--fonte-moradia);
    margin: 0;
    color:black;
    font-size: ${props => props.tamanho || '1.25rem'}
`
const LogoMoradIA = styled.img`
    padding: 0.3125rem;
    border-radius: 0.4375rem;
    background-color: #4F46E5;
    width: ${props => props.tamanhoImg || '1.25rem'};
    height: ${props => props.tamanhoImg || '1.25rem'};`

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