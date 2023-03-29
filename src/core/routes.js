import React from "react";
import { Route, Switch } from "react-router-dom";

import Cadastrar from "../pages/Cadastro";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewItem from "../pages/NewItem";
import Perfil from "../pages/Perfil";

export default function HubLocalTeste() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact isPrivate path="/cadastro" component={Cadastrar} />
      <Route exact isPrivate path="/home" component={Home} />
      <Route exact isPrivate path="/chat" component={Chat} />
      <Route exact isPrivate path="/profile" component={Perfil} />
      <Route exact isPrivate path="/home/new-item" component={NewItem} />
    </Switch>
  );
}
