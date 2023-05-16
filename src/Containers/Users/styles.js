import styled from 'styled-components';
import Background from '../../assets/bg2.svg';


export const Container = styled.div`
//background: url("${Background}");
background: linear-gradient(360.44deg, rgba(255, 10, 10, 0.8) 0.84%, rgba(255,120, 10, 0.8) 0.84%, rgba(255, 1, 1, 0.8) 100%);
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
height: 100%;
min-height: 100vh;

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

export const User = styled.li`
list-style: none;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 50px;
border: none;
margin-top: 28px;
outline: none;
display: flex;
justify-content: space-around;
align-items: center;

p{
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}
button{
background: none;
border: none;
cursor: pointer;
}
button:hover{
    opacity: 0.8;
}
button:active{
    opacity: 0.3;
}
`