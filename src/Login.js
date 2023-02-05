import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-logo">
        <Link to="/">
          <img className="login-logo-logo" src="logo-drk.png" alt="Logo"></img>
        </Link>
      </div>
      <div className="login-form">
        <h1 className="login-head">Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            className="login-form-input"
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            className="login-form-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <button type="submit" onClick={login} className="login-button">
          Sign In
        </button>
        <p className="login-con">
          By continuing, you agree to Paper Place's Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={register} className="login-button">
          Create your Paper Place Account
        </button>
      </div>
    </div>
  );
}

export default Login;
