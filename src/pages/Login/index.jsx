import React, { useContext, useState } from 'react';
import LoginImage from '../../assets/imgs/LoginImage.png';
import Logo from '../../assets/imgs/Logo.png';
import { Context } from '../../context/AuthContext';
import history from '../../navigation/history';
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
} from '../shared/styles/styles';

const Login = () => {
  const { handleLogin } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const access = {
    email,
    password,
  };

  return (
    <Container>
      <ImagemLogin>
        <Image src={LoginImage} />
        <MainText>
          <h1>Junte-se a vários clientes satisfeitos.</h1>
          <h3>
            Cliente HubLocal ganha mais relevância, autoridade e <br></br>
            visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja
            uma delas!
          </h3>
        </MainText>
      </ImagemLogin>
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
            <button onClick={() => handleLogin(access)}>Login</button>
          </ButtonBlue>
          <BotaoGreen>
            <button onClick={() => history.push('/cadastro')}>
              Criar conta
            </button>
          </BotaoGreen>
        </Fields>
      </Acesso>
    </Container>
  );
};

export default Login;
