import React, { useContext, useState } from 'react';
import ImagemEmpresas from '../../../assets/imgs/ImagemEmpresas.png';
import ImagemPadrao from '../../../assets/imgs/ImagemPadrao.png';
import { Context } from '../../../context/AuthContext';
import { Container, Empresa, UsuarioLogado } from './styles';

const HeaderComponent = (props) => {
  const { userName } = useContext(Context);
  const [page, setPage] = useState(props.pageName);

  return (
    <React.Fragment>
      <Container>
        <Empresa>
          <img src={ImagemEmpresas} alt="" />
          <h1>{page}</h1>
        </Empresa>
        <UsuarioLogado>
          <img src={ImagemPadrao} alt="" />
          <select>
            <option value="">{userName}</option>
          </select>
        </UsuarioLogado>
      </Container>
    </React.Fragment>
  );
};

export default HeaderComponent;
