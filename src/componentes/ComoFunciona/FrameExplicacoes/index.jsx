import styled from "styled-components"
import { Titulo } from "../../ComponentesPadrao/Titulo"


const dadosExplicaoes = [
    { 
        titulo: "1. Conte sobre você!",
        texto: "Responda algumas perguntas rápidas sobre seu estilo de vida, orçamento para moradia e preferências profissionais.",
        svgsimbolo: (<svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://   www.w3.org/2000/svg">
                <path d="M13.6014 17.2V15.4C13.6014 14.4452 13.2221 13.5295 12.5469 12.8544C11.8717 12.1793 10.9559 11.8 10.001 11.8H4.60041C3.64552 11.8 2.72974 12.1793 2.05454 12.8544C1.37933 13.5295 1 14.4452 1 15.4V17.2M10.9011 4.6C10.9011 6.58823 9.28917 8.2 7.30072 8.2C5.31227 8.2 3.70031 6.58823 3.70031 4.6C3.70031 2.61177 5.31227 1 7.30072 1C9.28917 1 10.9011 2.61177 10.9011 4.6Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
                </svg>
        )
    },
    {
        titulo: "2. Analisamos suas preferências!",
        texto: "Cruzamos suas respostas com nosso banco de dados inteligente que avalia custo de vida, clima, segurança e mais.",
        svgsimbolo: (
            <svg 
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0014 10.0007H16.7693C16.3759 9.99988 15.9931 10.1279 15.6794 10.3652C15.3657 10.6025 15.1383 10.9361 15.0321 11.3148L12.917 18.8394C12.9033 18.8862 12.8749 18.9272 12.8359 18.9564C12.797 18.9856 12.7496 19.0014 12.7009 19.0014C12.6522 19.0014 12.6049 18.9856 12.5659 18.9564C12.527 18.9272 12.4986 18.8862 12.4849 18.8394L7.51652 1.16201C7.50289 1.11527 7.47446 1.07422 7.43551 1.045C7.39656 1.01579 7.34919 1 7.3005 1C7.25182 1 7.20444 1.01579 7.16549 1.045C7.12654 1.07422 7.09812 1.11527 7.08449 1.16201L4.96932 8.68661C4.86353 9.06388 4.63753 9.39634 4.32564 9.6335C4.01375 9.87067 3.633 9.9996 3.24118 10.0007H1" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
            </svg>

        )
    },
    {
        titulo: "3. Descubra suas cidades ideais",
        texto: "Receba um ranking completo com o percentual de match de cada cidade, com relatórios detalhados para sua decisão.",
        svgsimbolo: (
            <svg 
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75003 1.07175C9.67449 1.11864 9.61356 1.18572 9.57412 1.2654L7.49602 5.4765C7.35895 5.75395 7.15652 5.99393 6.90615 6.17579C6.65577 6.35766 6.36495 6.47595 6.05872 6.5205L1.41022 7.2C1.32175 7.21251 1.23858 7.24962 1.17017 7.30709C1.10176 7.36456 1.05087 7.44009 1.02329 7.52508C0.995713 7.61006 0.992558 7.70108 1.01419 7.78777C1.03581 7.87446 1.08135 7.95333 1.14562 8.0154L4.50802 11.2887C4.72997 11.5048 4.896 11.7717 4.9918 12.0663C5.0876 12.361 5.1103 12.6745 5.05792 12.9798L4.26502 17.6049C4.24959 17.6928 4.25915 17.7833 4.29261 17.8661C4.32607 17.9489 4.38208 18.0206 4.45429 18.0731C4.52649 18.1256 4.61197 18.1568 4.70103 18.1631C4.79008 18.1695 4.87912 18.1507 4.95802 18.1089L9.11332 15.9237C9.38717 15.7799 9.69186 15.7048 10.0012 15.7048C10.3105 15.7048 10.6152 15.7799 10.889 15.9237L15.0452 18.1089C15.1241 18.1509 15.2133 18.1699 15.3025 18.1637C15.3917 18.1575 15.4774 18.1264 15.5497 18.0738C15.6221 18.0213 15.6782 17.9494 15.7117 17.8665C15.7452 17.7836 15.7547 17.693 15.7391 17.6049L14.9453 12.9789C14.8932 12.6737 14.916 12.3604 15.0118 12.066C15.1076 11.7715 15.2735 11.5048 15.4952 11.2887L18.8576 8.0145C18.9214 7.95236 18.9664 7.87362 18.9877 7.7872C19.0091 7.70077 19.0058 7.6101 18.9782 7.52545C18.9507 7.4408 18.9 7.36554 18.832 7.30818C18.7639 7.25083 18.6811 7.21367 18.593 7.2009L13.9436 6.5205C13.6377 6.47561 13.3473 6.35715 13.0973 6.17531C12.8473 5.99347 12.6451 5.75367 12.5081 5.4765L10.4291 1.2654C10.3897 1.18572 10.3288 1.11864 10.2532 1.07175C10.1777 1.02485 10.0905 1 10.0016 1C9.91271 1 9.82557 1.02485 9.75003 1.07175Z" stroke="#4F46E5" stroke-width="2"          stroke-linecap="round"/> 
            </svg>

        )
    }
]


const GradeExplicacoes = styled.div`
    display: flex;
    gap: 32px;
`
const DivExplicacoes = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #F8FAFC;
    border-radius: 16px;
    padding: 32px;
    gap: 20px;
`

const TextosExplicacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const TextoExplicacao = styled.p`
    font-family: var(--fonte-moradia);
    font-weight: 400;
    color: #6B7280;
`
const Svg = styled.div`
    display: flex;
    width: 21.6px;
    justify-content: center;
    align-items: center;
    background-color: #EEF2FF;
    padding: 15px 15px;
    border-radius: 10px;
`

function FrameExplicacoes(){
    return(
        <GradeExplicacoes>
                {dadosExplicaoes.map((item,index) =>(
                        <DivExplicacoes key={index}>
                                <Svg>
<<<<<<< HEAD
                                    {item.path}
=======
                                    {item.svgsimbolo}
>>>>>>> dev
                                </Svg>
                                <TextosExplicacao>
                                    <Titulo 
                                        tamanho='18px' 
                                        peso='700' 
                                        posicao='flex-start'
                                    >{item.titulo}</Titulo>
                                    <TextoExplicacao>{item.texto}</TextoExplicacao>
                                </TextosExplicacao>
                        </DivExplicacoes> 
            ))}
                
        </GradeExplicacoes>
         
    )
}

export default FrameExplicacoes;