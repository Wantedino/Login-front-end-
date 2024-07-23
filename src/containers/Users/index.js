import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import axios from "axios";

import Logo2 from "../../assets/logo2.svg";
import Seta from "../../assets/seta.svg";
import Lixeira from "../../assets/lixeira.svg";

import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";

import {
  Container,
  Img,
  User,
  Button,
  } from "./styles";

//JSX
const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  console.log(navigate)
  
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3002/users");

      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3002/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage(){
    navigate(-1)
  }
  return (
    <Container>
      <Img src={Logo2} alt="logo-img" />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p> <p>{user.age} Anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img src={Seta} alt="seta" />Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default Users;
