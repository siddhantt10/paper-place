import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';

function Header() {

  const [{ user }] = useStateValue();

  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div class="nav-container">
          <Link to="/">
            <img className="nav-logo" src="logo-lte.png" alt="Logo"></img>
          </Link>
          <form className="srch-form">
            <input className="srch-form-inp" type="text" placeholder="Search..."></input>
            <button className="search-button" type="submit">
              <FontAwesomeIcon className="srch-icon" icon={faSearch} />
            </button>
          </form>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/MyList">My list</Link>
            <Link to={!user && "/login"} className="login-btn">
              <div onClick={ signOut }>
              <FontAwesomeIcon className="icon" icon={faUser} />
              {user? "SignOut" : "SignIn"}
              </div>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
