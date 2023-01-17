import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/about" element={
            <About />
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
