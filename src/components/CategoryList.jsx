import React from 'react';
import { useCategories, useUserHistory } from '../context/Context';

const CategoryList = () => {
    const categories = useCategories();
    const { addHistory } = useUserHistory();

    const handleClick = (category) => {
        // Додати історію переходу на категорію
        addHistory(`/categories/${category}`);
    };

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(category)}>{category}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;