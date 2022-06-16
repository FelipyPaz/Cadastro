import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container, Image, User } from "./style";
import UserTemp from "../../assets/UserTemp.svg";
import reverseArrow from "../../assets/reverseArrow.svg";
import Bin from "../../assets/Bin.svg";
import H1 from "../../components/Title";
import ContainerItens  from "../../components/containerItens"
import Button from "../../components/Button";




const Users = () => {
  const [user, setUser] = useState([]);
  const history = useHistory();
  

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUser(newUsers);
    }
    fetchUsers();
  }, [user]);

  async function deleteUser(userID) {
    await axios.delete(`http://localhost:3001/users/${userID}`);
    const newUser = user.filter((user) => user.id !== userID);
    setUser(newUser);
  }

  function goBack(){
    history.push("/")
  }



  return (
    <Container>
      <Image src={UserTemp} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {user.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age} Anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lixo" src={Bin} />
              </button>
            </User>
          ))}
        </ul>
        <Button onClick={goBack} >
          <img alt="seta" src={reverseArrow} />
          Voltar{" "}
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
