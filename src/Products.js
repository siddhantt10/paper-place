import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./component/ProductCard";

function Products() {
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
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <ProductCard
          id="1"
          title="Product 1"
          author="Sidd vai"
          price={75}
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
    </div>
  );
}
export default Products;
