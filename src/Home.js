import React from "react";
import { Link } from "react-router-dom";
import HomepageHero from "./component/HomepageHero";
import ProductCard from "./component/ProductCard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <HomepageHero />
        <div className="home-hero-text">
          <h3>Welcome to</h3>
          <h1>Paper Place</h1>
          <p>
            One place to share your precious book collection with like minds
            like you.
          </p>
          <Link to="/LogIn">
            <button className="cta-btn" type="submit">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="home-newBooks">
          <h1 className="home-newBooks-head">Newly posted books</h1>
          <p className="home-newBooks-text">
            explore the latest books posted by our users.
          </p>
        <div className="home-newBooks-row">
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
        <button className="home-newBooks-cta">view all</button>
      </div>
    </div>
  );
}

export default Home;
