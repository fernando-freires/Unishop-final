import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import EditarUsuario from '../../../assets/imgs/EditarUsuario.png';
import api from '../../../database/api';
import { InputEdition } from './styles';

export default function Editar(props) {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState(props.tipo);
  const [name, setName] = useState(props.companyName);
  const [website, setWebsite] = useState(props.companyWebsite);
  const [cnpj, setCnpj] = useState(props.companyCnpj);
  const [state, setState] = useState(false);
  const [companyId, setCompanyId] = useState(props.companyId);
  const [localId, setLocalId] = useState(props.localId);
  const [localName, setLocalName] = useState(props.locationName);
  const [cep, setCep] = useState(props.localCep);
  const [street, setStreet] = useState(props.localStreet);
  const [number, setNumber] = useState(props.localNumber);
  const [neighborhood, setNeighborhood] = useState(props.LocalNeighborhood);
  const [city, setCity] = useState(props.localCity);
  const [uf, setUf] = useState(props.localUf);

  const handleClickOpen = async () => {
    setOpen(true);
    setState(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postData = {
    name,
    website,
    cnpj,
  };

  const LocationData = {
    name: localName,
    cep,
    street,
    number,
    neighborhood,
    city,
    UF: uf,
  };

  const handleSubmitCompany = async () => {
    await api.put(`/api/hub/empresas/${companyId}`, postData);
    document.location.reload(true);
  };

  const handleSubmitLocation = async () => {
    await api.put(`/api/hub/locais/${localId}`, LocationData);
    document.location.reload(true);
  };

  return (
    <React.Fragment>
      <img src={EditarUsuario} alt="" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        {tipo === 'Empresa' && (
          <DialogContent>
            <DialogTitle>
              Editar: <b>{name}</b>
            </DialogTitle>
            <InputEdition>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputEdition>
            <InputEdition>
              <label>Website</label>
              <input
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
              />
            </InputEdition>
            <InputEdition>
              <label>CNPJ</label>
              <IMaskInput
                mask="00.000.000/0000-00"
                onChange={(e) => setCnpj(e.target.value)}
                value={cnpj}
              />
            </InputEdition>
            <DialogActions>
              <Button variant="contained" onClick={() => handleSubmitCompany()}>
                Editar
              </Button>
            </DialogActions>
          </DialogContent>
        )}
        {tipo === 'Local' && (
          <DialogContent>
            <DialogTitle>
              Editar: <b>{localName}</b>
            </DialogTitle>
            <InputEdition>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => setLocalName(e.target.value)}
                value={localName}
              />
            </InputEdition>
            <InputEdition>
              <label>CEP</label>
              <IMaskInput
                mask="00000-000"
                type="text"
                onChange={(e) => setCep(e.target.value)}
                value={cep}
              />
            </InputEdition>
            <InputEdition>
              <label>Rua</label>
              <input
                type="text"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
            </InputEdition>
            <InputEdition>
              <label>Número</label>
              <input
                type="text"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </InputEdition>
            <InputEdition>
              <label>Bairro</label>
              <input
                type="text"
                onChange={(e) => setNeighborhood(e.target.value)}
                value={neighborhood}
              />
            </InputEdition>
            <InputEdition>
              <label>Cidade</label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </InputEdition>
            <InputEdition>
              <label>Estado</label>
              <input
                type="text"
                onChange={(e) => setUf(e.target.value)}
                value={uf}
              />
            </InputEdition>
            <DialogActions>
              <Button
                variant="contained"
                onClick={() => handleSubmitLocation()}
              >
                Salvar
              </Button>
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </React.Fragment>
  );
}
