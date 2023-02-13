import React from "react";
import { Link } from "react-router-dom";
import HomepageHero from "./component/HomepageHero";
import ProductCard from "./component/ProductCard";
import "./Home.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";


function Home() {
  const postRef = collection(db, "posts");
  const [homeCard, setHomeCard] = useState([]);
  const [{ user }] = useStateValue();



  useEffect(() => {
    const getPosts = async () => {
      const postSnapshot = await getDocs(postRef);
      const postList = postSnapshot.docs.slice(0, 4).map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHomeCard(postList);
    };
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const listHomeCard = homeCard.map((post) => {
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
          <Link to={user? "/products" : "/LogIn"}>
            <button className="cta-btn">
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
          {listHomeCard}
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
          <Link to="/postform">
          <button className="home-post-cta" type="submit">
            Let's Do this.
          </button>
          </Link>
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
