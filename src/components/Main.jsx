import React, { useState, useEffect } from 'react';


function MainPage({ product, comments, onCommentAdd, exchangeRate, convertPriceToUSD }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      onCommentAdd(newComment);
      setNewComment('');
    }
  };

  useEffect(() => {
    if (exchangeRate && !isNaN(product.price) && !isNaN(exchangeRate)) {
      const priceInUSD = product.price / exchangeRate;
      convertPriceToUSD(priceInUSD.toFixed(2));
    }
  }, [product.price, exchangeRate, convertPriceToUSD]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <h2>Коментарі:</h2>
      <ul className='ul-comment'>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>


      <form onSubmit={handleCommentSubmit}  >
        <textarea className='textarea'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введіть коментар..."
        />
        <button type="submit">Додати коментар</button>
      </form>
    </div>
  );
}

export default MainPage;