
import React, { useState, useCallback, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = useCallback((token: string) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
    setActivePage('dashboard');
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  }, []);

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Layout 
      activePage={activePage} 
      setActivePage={setActivePage} 
      onLogout={handleLogout} 
    />
  );
};

export default App;