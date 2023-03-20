import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import api from '../../../database/api';
import { InputCreation } from './styles';

export default function Criar(props) {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState(props.tipo);
  const [userId, setUserId] = useState(props.userId);
  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [companyId, setCompanyId] = useState(props.companyId);
  const [localName, setLocalName] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const viewDialog = () => {
    setOpen(true);
    setState(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const empresa = {
    userId,
    name,
    website,
    cnpj,
  };

  const local = {
    companyId,
    name: localName,
    cep,
    street,
    number,
    neighborhood,
    city,
    UF: uf,
  };

  const criaEmpresa = async () => {
    await api.post('/api/hub/empresas/add', empresa);
    document.location.reload(true); // Recarregar a página para mostrar novos dados inseridos
  };

  const criaLocal = async () => {
    await api.post('/api/hub/locais/add', local);
    document.location.reload(true); // Recarregar a página para mostrar novos dados inseridos
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={viewDialog}>
        Adicionar {tipo}
      </Button>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Adicionar {tipo}</DialogTitle>
        {tipo === 'Empresa' && (
          <DialogContent>
            <InputCreation>
              <label>Nome</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </InputCreation>
            <InputCreation>
              <label>Website</label>
              <input type="text" onChange={(e) => setWebsite(e.target.value)} />
            </InputCreation>
            <InputCreation>
              <label>CNPJ</label>
              <IMaskInput
                mask="00.000.000/0000-00"
                type="text"
                placeholderChar="00.000.000/0000-00"
                onChange={(e) => setCnpj(e.target.value)}
              />
            </InputCreation>
            <DialogActions>
              <Button variant="contained" onClick={() => criaEmpresa()}>
                Adicionar
              </Button>
            </DialogActions>
          </DialogContent>
        )}
        {/* Condicional para reutilização de componente */}
        {tipo === 'Local' && (
          <DialogContent>
            <InputCreation>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => setLocalName(e.target.value)}
              />
            </InputCreation>
            <InputCreation>
              <label>CEP</label>
              {/* Input Mask utilizado para facilitar a validação de dados de entrada */}
              <IMaskInput
                mask="00000-000"
                type="text"
                onChange={(e) => setCep(e.target.value)}
              />
            </InputCreation>
            <InputCreation>
              <label>Rua</label>
              <input type="text" onChange={(e) => setStreet(e.target.value)} />
            </InputCreation>
            <InputCreation>
              <label>Número</label>
              <input type="text" onChange={(e) => setNumber(e.target.value)} />
            </InputCreation>
            <InputCreation>
              <label>Bairro</label>
              <input
                type="text"
                onChange={(e) => setNeighborhood(e.target.value)}
              />
            </InputCreation>
            <InputCreation>
              <label>Cidade</label>
              <input type="text" onChange={(e) => setCity(e.target.value)} />
            </InputCreation>
            <InputCreation>
              <label>Estado</label>
              <input type="text" onChange={(e) => setUf(e.target.value)} />
            </InputCreation>
            <DialogActions>
              <Button variant="contained" onClick={() => criaLocal()}>
                Adicionar
              </Button>
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </React.Fragment>
  );
}
