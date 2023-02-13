import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  author,
  description,
  rentPrice,
  sellPrice,
  rent,
  sell,
  image,
  userId,
}) => {
  return (
    <div className="productCard">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <div className="product-info">
          <h2>{title}</h2>
          <p className="product-author">{author}</p>
          <p className="product-price">
            {rent ? (
              <p>Rent Price: ₹{rentPrice}/week</p>
            ) : (
              <p>Not available for renting.</p>
            )}
            {sell ? (
              <p>Sell Price: ₹{sellPrice}</p>
            ) : (
              <p>Not available for selling.</p>
            )}
          </p>
        </div>
        <Link to={`/checkout/${id}`}>
          <button>Checkout</button>
        </Link>
      </Link>
    </div>
  );
};

export default ProductCard;
