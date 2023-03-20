import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../../database/api';
import Criar from './../../../../components/CRUD-Dialogs/Criar/index';
import Deleta from './../../../../components/CRUD-Dialogs/Deletar/index';
import Editar from './../../../../components/CRUD-Dialogs/Editar/index';
import {
  Aviso,
  Columns,
  Container,
  CRUD,
  Local,
  Mensagem,
  Tabela,
} from './styles';

const TabelaLocais = () => {
  const [locations, setLocations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/api/hub/locais/local/${id}`)
      .then((response) => setLocations(response.data));
  }, [id]);

  return (
    <Tabela>
      {locations.length > 0 ? (
        <React.Fragment>
          <div className="criarLocal">
            <Criar tipo="Local" companyId={id} />
          </div>
          {locations.length > 0 && (
            <Container>
              <Columns>
                <h1>Local</h1>
                <h1>Ações</h1>
              </Columns>
              {locations.map((location) => (
                <Local key={location.id}>
                  <h1>{location.name}</h1>
                  <CRUD>
                    <Editar
                      tipo="Local"
                      localId={location.id}
                      idCompany={location.companyId}
                      locationName={location.name}
                      localCep={location.cep}
                      localStreet={location.street}
                      localNumber={location.number}
                      LocalNeighborhood={location.neighborhood}
                      localCity={location.city}
                      localUf={location.UF}
                    />
                    <Deleta
                      tipo="Local"
                      localId={location.id}
                      locationName={location.name}
                    />
                  </CRUD>
                </Local>
              ))}
            </Container>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Aviso>
            <Mensagem>Nenhum local cadastrado!</Mensagem>
            <Criar tipo="Local" companyId={id} />
          </Aviso>
        </React.Fragment>
      )}
    </Tabela>
  );
};

export default TabelaLocais;
