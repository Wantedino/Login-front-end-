import React, { useState, useRef} from "react";
import { useNavigate } from 'react-router-dom'

import axios from "axios";

import Logo1 from "../../assets/logo1.svg";
import Seta from "../../assets/seta.svg";

import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";

import {
  Container,
  Img,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate()

  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3002/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate('/usuarios')
  }
  


  return (
    <Container>
      <Img src={Logo1} alt="logo-img" />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Seta} alt="seta" />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
