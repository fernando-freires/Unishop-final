import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import history from '../../navigation/history';
import HeaderComponent from '../../shared/components/Header/index';
import TabelaLocais from './components/LocaisComponent/index';
import { Container, Header, Locais } from './styles';

const Local = () => {
  return (
    <Container>
      <HeaderComponent pageName="Meus locais" />
      <Header>
        <p onClick={() => history.goBack()}>
          <IoMdArrowBack />
          Minhas Empresas
        </p>
      </Header>
      <Locais>
        <TabelaLocais />
      </Locais>
    </Container>
  );
};

export default Local;
