import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>


          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
            }
          />


          <Route path="/about" element={
            <>
              <Header />
              <About />
            </>
          } />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
