import React, { useEffect, useState } from 'react';
import Locais from '../../../../assets/imgs/Locais.png';
import Deleta from '../../../../components/CRUD-Dialogs/Deletar/index';
import Editar from '../../../../components/CRUD-Dialogs/Editar/index';
import api from '../../../../database/api';
import history from '../../../../navigation/history';
import Criar from './../../../../components/CRUD-Dialogs/Criar/index';
import {
  Aviso,
  Columns,
  Container,
  CRUD,
  Empresa,
  Mensagem,
  Tabela,
} from './styles';

const TabelaEmpresa = (props) => {
  const [companies, setCompanies] = useState([]);
  const [userId, setUserId] = useState(props.userId);

  useEffect(() => {
    api
      .get(`/api/hub/empresas/empresa/${userId}`)
      .then((response) => setCompanies(response.data));
  }, [userId]);

  return (
    <Tabela>
      {companies.length > 0 ? (
        <React.Fragment>
          <div className="criaEmpresa">
            <Criar tipo="Empresa" userId={userId} />
          </div>
          {companies.length > 0 && (
            <Container>
              <Columns>
                <h1>Empresas</h1>
                <h1>Ações</h1>
              </Columns>
              {companies.map((company) => (
                <Empresa key={company.id}>
                  <h1>{company.name}</h1>
                  <CRUD>
                    <Editar
                      tipo="Empresa"
                      companyId={company.id}
                      companyName={company.name}
                      companyWebsite={company.website}
                      companyCnpj={company.cnpj}
                    />
                    <img
                      src={Locais}
                      alt=""
                      onClick={() => history.push(`/locais/${company.id}`)}
                    />
                    <Deleta
                      tipo="Empresa"
                      companyId={company.id}
                      companyName={company.name}
                    />
                  </CRUD>
                </Empresa>
              ))}
            </Container>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Aviso>
            <Mensagem>Nenhuma empresa cadastrada!</Mensagem>
            <Criar tipo="Empresa" userId={userId} />
          </Aviso>
        </React.Fragment>
      )}
    </Tabela>
  );
};

export default TabelaEmpresa;
