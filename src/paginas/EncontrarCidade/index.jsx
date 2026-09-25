import styled from 'styled-components';
import { Titulo } from '../../componentes/ComponentesPadrao/Titulo';
import { Texto } from '../../componentes/ComponentesPadrao/Texto';

const CampoEncontrarCidade = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 6.25rem;
    min-height: 50vh;
    gap: 1rem;

    @media (max-width: 48rem){
        padding: 3rem 1.25rem;
    }
`

function EncontrarCidade(){
    return(
        <CampoEncontrarCidade>
            <Titulo>Encontre sua cidade</Titulo>
            <Texto>Em breve você poderá descobrir a cidade ideal para morar.</Texto>
        </CampoEncontrarCidade>
    )
}

export default EncontrarCidade;
