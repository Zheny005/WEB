import React, { useState } from 'react';
import ProductPage from './components/Main.jsx';
import './css/Main.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const products = [
    { id: 1, name: 'Товар 1', description: 'Опис товару 1.' },
    { id: 2, name: 'Товар 2', description: 'Опис товару 2.' },
    { id: 3, name: 'Товар 3', description: 'Опис товару 3.' },
  ];

  const handleProductSelect = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
    // Зберігаємо коментарі для кожного товару окремо
    setComments((prevComments) => ({
      ...prevComments,
      [productId]: prevComments[productId] || [],
    }));
  };

  const handleCommentAdd = (comment) => {
    if (selectedProduct) {
      setComments((prevComments) => ({
        ...prevComments,
        [selectedProduct.id]: [...(prevComments[selectedProduct.id] || []), comment],
      }));
    }
  };

  return (
    <div className="app">
      <h1>Виберіть товар:</h1>
      <ul className="ul-product">
        {products.map((product) => (
          <li key={product.id}>
            <label>
              <input
                type="radio"
                name="product"
                value={product.id}
                checked={selectedProduct?.id === product.id}
                onChange={() => handleProductSelect(product.id)}
              />
              {product.name}
            </label>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          comments={comments[selectedProduct.id] || []}
          onCommentAdd={handleCommentAdd}
        />
      )}
    </div>
  );
}

export default App;