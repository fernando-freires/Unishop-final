import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import DeletarUsuario from '../../../assets/imgs/DeletarUsuario.png';
import api from '../../../database/api';

export default function Deleta(props) {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState(props.tipo);
  const [companyId, setCompanyId] = useState(props.companyId);
  const [companyName, setCompanyName] = useState(props.companyName);
  const [localId, setLocalId] = useState(props.localId);
  const [localName, setLocalName] = useState(props.locationName);
  const [state, setState] = useState(false);

  const viewDialog = () => {
    setOpen(true);
    setState(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const remove = async () => {
    await api.delete(`/api/hub/empresas/${companyId}`);
    document.location.reload(true); // Recarregar a página para mostrar novos dados inseridos
  };

  const deleteLocal = async () => {
    await api.delete(`/api/hub/locais/${localId}`);
    document.location.reload(true); // Recarregar a página para mostrar novos dados inseridos
  };

  return (
    <React.Fragment>
      <img src={DeletarUsuario} alt="" onClick={viewDialog} />
      <Dialog open={open} onClose={closeDialog}>
        {tipo === 'Empresa' && (
          <React.Fragment>
            <DialogTitle>
              A empresa <b>{companyName}</b> será excluída. Tem certeza dessa
              ação?
            </DialogTitle>
            <DialogContent>
              <DialogActions>
                <Button color="error" variant="contained" onClick={remove}>
                  Excluir
                </Button>
              </DialogActions>
            </DialogContent>
          </React.Fragment>
        )}
        {tipo === 'Local' && (
          <DialogContent>
            <DialogTitle>
              O local <b>{localName}</b> será excluído. Tem certeza dessa ação?
            </DialogTitle>
            <DialogActions>
              <Button color="error" variant="contained" onClick={deleteLocal}>
                Excluir
              </Button>
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </React.Fragment>
  );
}
