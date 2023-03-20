import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../helpers/security/index';
import Cadastrar from '../pages/Cadastro';
import Empresa from '../pages/Empresas';
import Local from '../pages/Locais';
import Login from '../pages/Login';

export default function HubLocalTeste() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact isPrivate path="/cadastro" component={Cadastrar} />
      <ProtectedRoute exact isPrivate path="/empresas" component={Empresa} />
      <ProtectedRoute exact isPrivate path="/locais/:id" component={Local} />
    </Switch>
  );
}
