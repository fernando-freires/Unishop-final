import { useEffect, useState } from 'react';
import api from '../../database/api';
import history from '../../navigation/history';

export default function useAuthentication() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    setUserId(JSON.parse(userId));
    setUserName(JSON.parse(userName));

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(acess) {
    const {
      data: { token, id, name },
    } = await api.post('/api/auth/login', acess);

    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('userId', JSON.stringify(id));
    localStorage.setItem('userName', JSON.stringify(name));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/empresas');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    userId,
    userName,
  };
}
