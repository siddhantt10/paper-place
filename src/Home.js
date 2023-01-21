import React from "react";
import { Link } from "react-router-dom";
import HomepageHero from "./component/HomepageHero";
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
      <div>
        <h1 className="home-title">What is Paper Place?</h1>
      </div>
    </div>
  );
}

export default Home;
