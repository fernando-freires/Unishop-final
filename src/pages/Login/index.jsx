import React, { useContext, useState } from "react";
import LoginImage from "../../assets/imgs/LoginImage.png";
import Logo from "../../assets/imgs/Logo.png";
import { Context } from "../../context/AuthContext";
import history from "../../navigation/history";
import {
  Acesso,
  BotaoGreen,
  ButtonBlue,
  Container,
  EmpresaLogo,
  Fields,
  Image,
  ImagemLogin,
  Inputs,
  MainText,
} from "../shared/styles/styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Acesso>
        <Fields>
          <EmpresaLogo src={Logo} />
          <Inputs>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </Inputs>
          <Inputs>
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Inputs>
          <ButtonBlue>
            <button onClick={() => history.push("/home")}>Login</button>
          </ButtonBlue>
          <BotaoGreen>
            <button onClick={() => history.push("/cadastro")}>
              Criar conta
            </button>
          </BotaoGreen>
        </Fields>
      </Acesso>
    </Container>
  );
};

export default Login;
