import styled from "styled-components"
import logo from '../../../assets/MoradIALogo.svg'

const MoradIA = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const TextoMoradIA = styled.h2`
    font-weight: 700;
    font-family: var(--fonte-moradia);
    color:black;
`
const LogoMoradIA = styled.img`
    padding: 5px;
    border-radius: 7px;
    background-color: #4F46E5;
    width: 20px;
    height: 20px;
`

export const EstiloStrong = styled.strong`
    color: #4F46E5;
`

function LogoMoradia(){
    return(
        <MoradIA>
            <LogoMoradIA src={logo}></LogoMoradIA>
            <TextoMoradIA>Morad<EstiloStrong>IA</EstiloStrong></TextoMoradIA>
    </MoradIA> 
    )    
}

export default LogoMoradia;