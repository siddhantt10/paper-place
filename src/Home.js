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
            id="dfgsdfhs"
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
        <Link to="/Products">
          <button className="home-newBooks-cta">view all</button>
        </Link>
      </div>

      <div className="home-catagories">
        <h1 className="home-catagories-head">Explore Different catagories</h1>
        <p className="home-catagories-text">
          explore the latest books posted by our users.
        </p>
        <div className="home-catagories-btn">
          <button className="home-catagories-cta">Fiction</button>
          <button className="home-catagories-cta">Non-fiction</button>
          <button className="home-catagories-cta">Mystery and thriller</button>
          <button className="home-catagories-cta">Horror</button>
          <button className="home-catagories-cta">Academic</button>
          <Link to="/Products">
            <button className="home-catagories-cta view-all">view all</button>
          </Link>
        </div>
      </div>

      <div className="home-post">
        <div className="home-post-lft">
          <h1 className="home-post-cta-head">Want to list your book?</h1>
          <p className="home-post-cta-text">
            Fill this form with the required details and have your book up for
            sharing with in 4 hrs. Note: you are required to sign-up to post
            your book.
          </p>
          <button className="home-post-cta" type="submit">
            Let's Do this.
          </button>
        </div>
        <div className="home-post-rgt">
          <img
            className="home-post-img"
            src="book-stack.png"
            alt="book stack"
          />
        </div>
      </div>

      <h1 className="home-rmndr">What are you waiting for?</h1>

      <div className="home-end">
        <div className="home-end-lft">
          <img className="home-end-img" src="comm.png" alt="community" />
        </div>
        <div className="home-end-rgt">
          <h1 className="home-end-head">Become a part of the community.</h1>
          <Link to="/LogIn">
            <button className="home-end-cta" type="submit">
              Sign-up Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
