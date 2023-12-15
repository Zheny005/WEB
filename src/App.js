import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthenticationContext';
import { BasketProvider } from './context/BasketContext';
import './App.css';
import { Header, Body, Footer } from './components/import';


function App() {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = () => {
    setIsLogged(prevIsLogged => !prevIsLogged);
  };

return (
    <AuthProvider>
      <BasketProvider>
        <div className="app">
          <Body isLogged={isLogged} toggleLogin={toggleLogin} />
        </div>
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;