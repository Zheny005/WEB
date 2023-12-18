import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AuthProvider } from './context/AuthenticationContext';
import { BasketProvider } from './context/BasketContext';
import './App.css';
import { Header, Body, Footer } from './components/import';
import AuthModal from './components/Authorization';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 

  const toggleLogin = () => {
    setIsLogged(prevIsLogged => !prevIsLogged);
  };

  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const removeItem = index => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
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