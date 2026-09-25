import styled from 'styled-components';
import { Link } from 'react-router';
import { Titulo } from '../../componentes/ComponentesPadrao/Titulo';

const CampoNaoEncontrada = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    gap: 1rem;
    padding: 3rem 1.25rem;
`

const LinkVoltar = styled(Link)`
    color: #4F46E5;
    font-family: "Inter", sans-serif;
    font-weight: 600;
`

function NaoEncontrada(){
    return(
        <CampoNaoEncontrada>
            <Titulo>Página não encontrada</Titulo>
            <LinkVoltar to="/">Voltar para o início</LinkVoltar>
        </CampoNaoEncontrada>
    )
}

export default NaoEncontrada;
