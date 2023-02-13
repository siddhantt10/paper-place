import React, {useEffect} from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./component/ProductCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";


function Products() {
  const postRef = collection(db, "posts");
  const [prodCard, setProdCard] = useState([]);

  useEffect(() => {

    const getPosts = async () => {
      const postSnapshot = await getDocs(postRef);
      const postList = postSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProdCard(postList);
    };
    getPosts();


    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listProdCard = prodCard.map((post) => {
    return (
        <div className="dash-body-card">
          <ProductCard
            id={post.id}
            title={post.bookTitle}
            author={post.bookAuthor}
            description={post.bookDescription}
            rentPrice={post.rentPrice}
            sellPrice={post.sellPrice}
            rent={post.rent}
            sell={post.sell}
            image={post.images}
            userId={post.userId}
          />
        </div>
    );
  });


  return (
    <div className="products">
      <div>
        <h1 className="products-h1">Search here</h1>
      </div>

      <div className="search-container">
        <form className="srch-form">
          <input
            className="srch-form-inp"
            type="text"
            placeholder="Search..."
          ></input>
          <button className="search-button" type="submit">
            <FontAwesomeIcon className="srch-icon" icon={faSearch} />
          </button>
        </form>
      </div>
      <div>
        <h1 className="products-h2">Results</h1>
      </div>
      <div className="products-container">
        {listProdCard}
      </div>
    </div>
  );
}
export default Products;
