import React from 'react';
import { useBasket } from '../context/BasketContext';

const Basket = () => {
    const { basketItems, addToBasket, removeFromBasket } = useBasket();

    const handleAddToBasket = () => {
        const newProduct = { id: Math.random(), name: 'New Product' };
        addToBasket(newProduct);
    };

    const handleRemoveFromBasket = (productId) => {
        removeFromBasket(productId);
    };

    return (
        <div>
            <h2>Basket</h2>
            <button onClick={handleAddToBasket}>Add to Basket</button>
            <ul>
                {basketItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRemoveFromBasket(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Basket;