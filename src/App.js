import React from "react";
import "./App.css";
import {Route, NavLink, BrowserRouter, Routes} from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <h1>UCSC Chess Club</h1>
      <ul className="navigation">
        <li><NavLink exact="true" to="/">Home</NavLink></li>
        <li><NavLink to="/tech">Tech</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
      </ul>
      <div>
        <Routes>
          <Route exact="true" path="/" element={<Home/>}/>
          <Route path="/tech" element={<Home/>}/>
          <Route path="/help" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
