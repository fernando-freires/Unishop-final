import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import HeaderComponent from '../../shared/components/Header/index';
import TabelaEmpresa from './components/EmpresaComponent/index';
import { Container, Empresas } from './styles';
const Empresa = () => {
  const { userId } = useContext(Context);
  return (
    <Container>
      <HeaderComponent pageName="Minhas Empresas" />
      <Empresas>
        <TabelaEmpresa userId={userId} />
      </Empresas>
    </Container>
  );
};

export default Empresa;
