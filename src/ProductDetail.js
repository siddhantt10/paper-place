import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function Productdetail() {
  const { id } = useParams();
  const prodRef = collection(db, "posts");
  const [prod, setprod] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const product = await getDocs(prodRef);
      const productData = product.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setprod(productData);
    };
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listProd = prod.map((post) => {
    if (post.id === id) {
      return (
        <div className="productdetail">
          <div className="productdetail-left">
            <img src={post.images} alt="" />
          </div>
          <div className="productdetail-right">
            <div>
              <h1>{post.bookTitle}</h1>
              <p className="productdetail-author">{post.bookAuthor}</p>
              <p className="productdetail-price">
                {post.rent ? (
                  <p>Rent Price: ₹{post.rentPrice}/week</p>
                ) : (
                  <p>Not available for renting.</p>
                )}
                {post.sell ? (
                  <p>Sell Price: ₹{post.sellPrice}</p>
                ) : (
                  <p>Not available for selling.</p>
                )}
              </p>
              <p className="productdetail-desc">{post.bookDescription}</p>
            </div>
            <div >
              <Link to={`/checkout/${id}`} className="productDetailCard">
                <button>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="pro-details">{listProd}</div>;
}

export default Productdetail;
