import styled from "styled-components";
import { Titulo } from "../../ComponentesPadrao/Titulo/index.jsx";


const DivElementos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const Ancora = styled.a`
    text-decoration: none;
    color: #6B7280;
    font-size: 0.875rem;
    font-weight: 400;
    font-family: var(--fonte-moradia);

    &:hover{
        color: #35373d;
    }
`

function DivsPS({lista}){
    return(
        <DivElementos>
            {lista.map((elemento,index) => ( 
                            
                              elemento.id === 'destaque' ? (
                                    <Titulo key={index} tamanho='0.875rem' posicao='flex-start'>{elemento.texto}</Titulo>
                                ) : (
                                    <Ancora key={index} href={elemento.link}>{elemento.texto}</Ancora>
                                )                      
            ))}  
        </DivElementos> 
    )
}

export default DivsPS;