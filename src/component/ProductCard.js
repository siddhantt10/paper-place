import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, author, price, image }) => {
  return (
    <div className="productCard">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <div className="product-info">
          <h2>{title}</h2>
          <p className="product-author">{author}</p>
          <p className="product-price">
            <small>₹</small>
            <strong>{price}</strong>
            <small>/week</small>
          </p>
        </div>
        <Link to={"/login"}>
          <button>Checkout</button>
        </Link>
      </Link>
    </div>
  );
};

export default ProductCard;
