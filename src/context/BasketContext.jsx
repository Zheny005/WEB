import React, { createContext, useState, useContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState([]);

    const addToBasket = (product) => {
        setBasketItems([...basketItems, product]);
    };

    const removeFromBasket = (productId) => {
        const updatedBasket = basketItems.filter(item => item.id !== productId);
        setBasketItems(updatedBasket);
    };

    return (
        <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    return useContext(BasketContext);
};
