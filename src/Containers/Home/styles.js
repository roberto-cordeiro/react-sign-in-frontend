import styled from 'styled-components'
import Background from '../../assets/bg.svg'


export const Container = styled.div`
background: linear-gradient(180.44deg, rgba(1, 1, 255, 0.9) 15.44%, rgba(1, 1, 255, 0.7) 50.25%, rgba(1, 1, 255, 0.6) 100%);

//background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
height: 100vh;
`;
export const Imagem = styled.img`
margin-top: 20px;
width: 350px;
padding: 10.5px;

:hover{
    padding:20px;
    width: 300px;
}
`;

export const Labelname = styled.p`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #EEEEEE;
letter-spacing: -0.408px;
padding-left: 25px;

`
export const InputInfo = styled.input`
background: rgba(255, 255, 255, 0.6);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 50px;
border: none;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
padding-left: 25px;
margin-bottom: 30px;
outline: none;
`
