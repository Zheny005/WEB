import React from 'react';
import { useAuth } from '../context/AuthenticationContext';

const Authentication = () => {
  const context = useAuth();

  console.log(context);

  const { isLoggedIn, toggleLogin } = context;


  return (
    <div>
      <h2>Authentication Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};


export default Authentication;