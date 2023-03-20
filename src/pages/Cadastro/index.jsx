import React, { useState } from 'react';
import LoginImage from '../../assets/imgs/LoginImage.png';
import Logo from '../../assets/imgs/Logo.png';
import api from '../../database/api';
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

const Cadastrar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const user = {
    name,
    email,
    password,
  };

  async function cadastro(userData) {
    if (password !== passwordConfirm) {
      throw new Error('Verifique os dados e tente novamente');
    }

    await api.post('/api/hub/usuarios/add', userData);
    history.push('/');
  }

  return (
    <Container>
      <ImagemLogin>
        <Image src={LoginImage} />
        <MainText>
          <h1>Junte-se a vários clientes satisfeitos.</h1>
          <p>
            Cliente HubLocal ganha mais relevância, autoridade e <br></br>
            visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja
            uma delas!
          </p>
        </MainText>
      </ImagemLogin>
      <Acesso>
        <Fields>
          <EmpresaLogo src={Logo} />
          <Inputs>
            <label>Nome</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </Inputs>
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
          <Inputs>
            <label>Repetir senha</label>
            <input
              type="password"
              placeholder="Ex. password: User@1234"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </Inputs>
          <BotaoGreen>
            <button onClick={() => cadastro(user)}>Criar conta</button>
          </BotaoGreen>
          <ButtonBlue>
            <button onClick={() => history.push('/')}>Login</button>
          </ButtonBlue>
        </Fields>
      </Acesso>
    </Container>
  );
};

export default Cadastrar;
