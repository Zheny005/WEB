import React from 'react';
import { useState } from 'react';
import { Header, Body, Footer, Menu } from './Components/import';
import './App.css';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'Mercedes-Benz w223', isChecked: false },
    { id: 2, name: 'Mercedes-Benz w222', isChecked: false },
    { id: 3, name: 'Mercedes-Benz w221', isChecked: false },
    { id: 4, name: 'Mercedes-Benz w220', isChecked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />

      <ul className='ul-product'>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;