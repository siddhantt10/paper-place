import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div class="nav-container">
          <Link to="/">
            <img className="nav-logo" src="logo-lte.png" alt="Logo"></img>
          </Link>
          <form>
            <input type="text" placeholder="Search..."></input>
            <button className="search-button" type="submit">
              <FontAwesomeIcon className="srch-icon" icon={faSearch} />
            </button>
          </form>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/MyList">My list</Link>
            <Link to="/LogIn" className="login">
              <FontAwesomeIcon className="icon" icon={faUser} />
              LogIn
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
