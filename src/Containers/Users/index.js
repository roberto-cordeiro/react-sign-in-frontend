import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

import treePersons from "../../assets/dbz.png";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/junk.svg";

import H1 from '../../components/Title'

import ContainerItens from '../../components/ContainerItens'

import { ButtonCad } from "../../components/Button/styles";

import {
  Container,
  Imagem,
  User,
} from "./styles";
const Users = () => {
  //const users = [];
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  
  

  useEffect(() => {
    async function fetchUsers(){
    const { data: newUsers } = await axios.get("http://localhost:3001/users")
    setUsers(newUsers)  
    }
    
    fetchUsers()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    navigate('/')
  }

  return (
    <Container>
      <Imagem alt="foto-pessoas" src={treePersons} />
      <ContainerItens isRed={true}>
        <H1>Users</H1>

        
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age} Anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>
        <ButtonCad isBlur={true} onClick={goBackPage} >
         <img  alt="seta" src={Arrow} /> Back 
        </ButtonCad>
      </ContainerItens>
    </Container>
  );
};

export default Users;
