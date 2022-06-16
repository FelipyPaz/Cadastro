import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import H1 from "../../components/Title";
import ContainerItens from "../../components/containerItens";
import Button from "../../components/Button";
import { Container, Image, InputLabel, Input } from "./style";
import People from "../../assets/People.svg";
import Arrow from "../../assets/Arrow.svg";

const App = () => {
  /* const user = []; */
  const [user, setUser] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUser([...user, newUser]);

    history.push("/usuarios");
  }

  return (
    <Container>
      <Image src={People} />
      <ContainerItens>
        <H1>Ola!</H1>
        <InputLabel>Nome</InputLabel>
        <Input maxLength="25" ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input maxLength="3" ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />{" "}
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
