import styled, { keyframes } from "styled-components";
import { useVisivel } from "../../../hooks/useVisivel";

const surgir = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
`

const Wrapper = styled.div`
    opacity: ${props => (props.$visivel ? 1 : 0)};
    animation: ${props => (props.$visivel ? surgir : 'none')} 0.7s ease-out;
`

function RevelarAoRolar({ children, limite = 0.15 }) {
    const [referencia, estaVisivel] = useVisivel({ limite });

    return (
        <Wrapper ref={referencia} $visivel={estaVisivel}>
            {children}
        </Wrapper>
    )
}

export default RevelarAoRolar;