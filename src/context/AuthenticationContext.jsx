import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const useAuth = () => useContext(AuthenticationContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLogged] = useState(false);

    const toggleLogin = () => {
        setIsLogged(prevIsLogged => !prevIsLogged);
    };

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </AuthenticationContext.Provider>
    );
};