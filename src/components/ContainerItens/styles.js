import styled from 'styled-components'

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(0, 0, 0, 0.4) 0.84%, rgba(0, 0, 0, 0.4) 0.84%, rgba(0, 0, 0, 0.4) 100%);
border-radius: 61px 61px 61px 61px;
padding: 23px 36px 20px 36px;
display: flex;
flex-direction: column;
height: 70vh;
:hover{
    background: linear-gradient(157.44deg, rgba(0, 0, 0, 0.2) 0.84%, rgba(0, 0, 0, 0.2) 0.84%, rgba(0, 0, 0, 0.2) 100%);
}

${ props => props.isRed && `
background: linear-gradient(157.44deg, rgba(0, 0, 0, 0.3) 0.84%, rgba(0, 0, 0, 0.3) 0.84%, rgba(0, 0, 0, 0.3) 100%);
backdrop-filter: blur(75px);
height: 100%;
min-height: calc(100vh - 230px);
padding-bottom: 50px;
margin-bottom: 20px;
`}
`;