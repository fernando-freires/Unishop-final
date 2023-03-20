import React, { createContext } from 'react';
import useAuthentication from './hooks/useAuthentication';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    userId,
    userName,
  } = useAuthentication();

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        loading,
        handleLogout,
        userId,
        userName,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
