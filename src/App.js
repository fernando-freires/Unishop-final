import React from 'react';
import { Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import GlobalStyle from './globalStyles';
import history from './navigation/history';
import HubLocalTeste from './core/routes';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <HubLocalTeste />
      </Router>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
