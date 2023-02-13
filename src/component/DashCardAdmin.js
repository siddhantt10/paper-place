import React from "react";
import "./DashCardAdmin.css";

function DashCardAdmin({
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
}) {

  return (
    <div className="dash-card">
      <div className="dash-card-rgt">
        <img src={image} alt="book" />
      </div>
      <div className="dash-card-info">
        <h1>{title}</h1>
        <h3>{author}</h3>
        {rent ? (
          <p>Rent Price: ₹{rentPrice}</p>
        ) : (
          <p>Not available for renting.</p>
        )}
        {sell ? (
          <p>Sell Price: ₹{sellPrice}</p>
        ) : (
          <p>Not available for selling.</p>
        )}
      </div>

      <div className="dash-card-lft">
        <button>Edit</button>
        <button >Delete</button>
      </div>
    </div>
  );
}

export default DashCardAdmin;
