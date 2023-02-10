import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const email = "siddpatel0903@gmail.com";
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = (email) => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  };

  const handleCopy = () => {
    copyToClipboard(email);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div>
      <div className="footer">
        <div className="footer-lft">
          <Link to="/">
            <img
              className="footer-logo-logo"
              src="logo-lte.png"
              alt="Logo"
            ></img>
          </Link>
          <p className="footer-logo-text">
            One place to share your preciouses book collection with like-minds
            like you.
          </p>
        </div>
        <div className="footer-mid">
          <h1 className="news-letter-head">News letter</h1>
          <p className="news-letter-text">
            sign-up to our updates news letter.
          </p>
          <form className="news-letter-form">
            <input
              className="news-letter-inp"
              type="text"
              placeholder="your e-mail here..."
            ></input>
            <button className="news-letter-sub" type="submit">
              Done
            </button>
          </form>
        </div>
        <div className="footer-rgt">
          <div className="footer-rgt-icons">
            <FontAwesomeIcon icon={faGithub} className="footer-icons" />
            <FontAwesomeIcon icon={faLinkedin} className="footer-icons" />
            <Link onClick={handleCopy} className="link">
              <FontAwesomeIcon icon={faGoogle} className="footer-icons" />
            </Link>{showPopup && <div className="popup">email Copied to clipboard</div>}
            <FontAwesomeIcon icon={faTwitter} className="footer-icons" />
            <FontAwesomeIcon icon={faInstagram} className="footer-icons" />
          </div>
          <div className="footer-rgt-links">
            <div className="footer-rgt-link-row">
              <Link to="/" className="footer-rgt-link">
                Home
              </Link>
              <Link to="/About" className="footer-rgt-link">
                About
              </Link>
              <Link to="/Post" className="footer-rgt-link">
                Post
              </Link>
            </div>
            <div className="footer-rgt-link-row">
              <Link to="/MyList" className="footer-rgt-link">
                My list
              </Link>
              <Link to="/LogIn" className="footer-rgt-link">
                LogIn
              </Link>
              <Link to="/Products" className="footer-rgt-link">
                All books
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="footer-bottom-line" />
        <p className="footer-bottom-text">
          © 2023 Paper-Place. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;