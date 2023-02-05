import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [{ user }] = useStateValue();

  const signOut = () => {
    if (user) {
      auth.signOut();
      navigate(0);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div class="nav-container">
          <Link to="/">
            <img className="nav-logo" src="logo-lte.png" alt="Logo"></img>
          </Link>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Products">Search</Link>
            <Link to="/About">About</Link>
            <Link to="/about">Contact</Link>
            <Link to="/MyList">My list</Link>
            <Link to={!user && "/login"} className="login-btn">
              <div onClick={signOut}>
                {user ? "SignOut" : "SignIn"}
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
