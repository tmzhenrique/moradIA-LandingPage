import styled from "styled-components";

const SectionFooter = styled.section`
    background-color: #FFFFFF;
`

const DivsFooter = styled.div`
    display: flex;
    justify-content: space-between;
`


function Footer(){
    return(
        <SectionFooter>
            <DivsFooter></DivsFooter>
            <DivsFooter></DivsFooter>     
        </SectionFooter>
    )
}

export default Footer;