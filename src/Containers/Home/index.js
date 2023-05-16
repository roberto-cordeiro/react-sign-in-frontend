import React, { useState, useRef } from "react";

import { useNavigate } from 'react-router-dom';

import axios from "axios";

import People from "../../assets/dbz.png";
import Arrow from "../../assets/arrow.svg";

import H1 from '../../components/Title';

import ContainerItens from '../../components/ContainerItens'

import { ButtonCad } from "../../components/Button/styles";

import {
  Container,
  Imagem,
  Labelname,
  InputInfo,
} from "./styles";
const App = () => {
  //const users = [];
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function userCad() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(newUser)

    setUsers([...users, newUser]);
    
    navigate('/usuarios')
    
  }
  

  return (
    <Container>
      <Imagem alt="foto-pessoas" src={People} />
      <ContainerItens>
        <H1>Sign up</H1>

        <Labelname>Name</Labelname>
        <InputInfo ref={inputName} placeholder="Nome" />

        <Labelname>Age</Labelname>
        <InputInfo ref={inputAge} placeholder="Idade" />

        <ButtonCad onClick={userCad}>
          Sign up <img alt="seta" src={Arrow} />
        </ButtonCad>
      </ContainerItens>
    </Container>
  );
};

export default App;
