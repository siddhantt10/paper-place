import React from 'react';
import './ProductCard.css';

const ProductCard = ({ id, title, author, price, image }) => {
  return (
    <div className='productCard'>
      
      <img src={image} alt={title} />
      <div className='product-info'>
        <h2 >{title}</h2>
        <p className='product-author'>{author}</p>
        <p className='product-price'>
          <small>₹</small><strong>{price}</strong><small>/week</small>
        </p>
      </div>
      <button >Checkout</button>
    </div>
  );
};

export default ProductCard;
