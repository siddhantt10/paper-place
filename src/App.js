import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";
import PostForm from "./PostForm";
import Outcome from "./component/Outcome";
import Dashboard from "./Dashboard";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  //useEffect
  useEffect(() => {



    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "set_User",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/products"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />

          <Route
            path="/products/:id"
            element={
              <>
                <Header />
                <ProductDetail />
                <Footer />
              </>
            }
          />

          <Route
            path="/checkout/:id"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />

          <Route
            path="postform"
            element={
              <>
                {user ? <Header />: <div></div>}
                {user ? <PostForm /> : <Login />}
                {user ? <Footer />: <div></div>}
              </>
            }
          />

          <Route
            path="/outcomes/:err"
            element={
              <>
                <Outcome />
              </>
            }
          />

          <Route
            path="dashboard"
            element={
              <>
                {user? <Header /> : ""}
                {user? <Dashboard /> : ""}
                {user? <Footer /> : ""}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
