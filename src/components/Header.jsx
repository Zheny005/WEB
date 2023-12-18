import React from 'react';
import { useAuth } from '../context/AuthenticationContext';
import { useBasket } from '../context/BasketContext';
import '../css/Header.css'

const Header = ({ toggleLogin }) => { 
    const { isLoggedIn } = useAuth();
    const { basketItems } = useBasket();

    const handleLoginClick = () => {
        toggleLogin(); 
    };

    return (
        <div>
            <h2>Authentication Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
            <button onClick={handleLoginClick}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
            <h2>Basket Items:</h2>
            <ul>
                {basketItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default Header;