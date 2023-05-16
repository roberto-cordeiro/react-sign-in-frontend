import styled from "styled-components";

export const ButtonCad = styled.button`
width: 342px;
height: 80px;
margin-top: 24px;
background: rgba(0, 0, 0, 0.8);
border-radius: 10px;
border: none;
font-style: normal;
font-weight: 700;
font-size: 23px;
line-height: 28px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
gap: 14px;
cursor: pointer;
&:hover{
    opacity: 0.8;
}
&:active{
    background-color: #1DB954;
}

${ props => props.isBlur && `
background: rgba(0, 0, 0, 0.4); /* */
border: 1px solid white; /* */
img{
    rotate: 180deg; /* */
}
&:active{
    background-color: #0091E6; /* */
}
`}
`