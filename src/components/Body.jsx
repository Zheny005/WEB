import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Debug from '../components/History';
import NavigationHistory from '../context/HistoryContext';
import Basket from './Basket';
import Authentication from '../components/Authentication';
import { useAuth } from '../context/AuthenticationContext';
import '../css/Body.css'

function Body() {
    const context = useAuth();

    console.log(context);

    const { isLoggedIn, toggleLogin } = context;

    return (
        <div className="menu-container">
            <Router>
                <ul className="ul-menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/basket">Basket</Link>
                    </li>
                    <li>
                        <Link to="/authentication">Authentication</Link>
                    </li>
                    <li>
                        <Link to="/debug">History</Link>
                    </li>
                    <li onClick={toggleLogin} className="login-button">
                        {isLoggedIn ? 'Вийти' : 'Увійти'}
                    </li>
                </ul>
                <NavigationHistory>
                    <Routes>
                        <Route path="/debug" element={<Debug />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/authentication" element={<Authentication toggleLogin={toggleLogin} />} />
                    </Routes>
                </NavigationHistory>
            </Router>
        </div>
    );
}

export default Body;