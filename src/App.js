import React from "react";
import "./App.css";
import {Route, NavLink, BrowserRouter, Routes} from "react-router-dom";

import Home from "./components/Home/Home";
import Chesscom from "./components/Chesscom/Chesscom";

import Circle from "./components/Home/Circle"

//images
import discord from "./images/discord.png"
import chess from "./images/chess.png"
import ambassador from "./images/ambassador.png"

//chess.com badge
//import Badge from "./components/Badge/Badge"

import "./components/Badge/Badge.css"
//URLS
var discordLink = "https://discord.com/invite/hgU4WFje6Y"
var chessPage = "https://www.chess.com/club/chess-club-at-university-of-california-santa-cruz"

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>UCSC Chess Club</h1>
      </div>
      <div className = "container">
        <Circle image = {discord} link = {discordLink} alt = "Discord Invite"/>
        <Circle image = {chess} link = {chessPage} alt = "Chess.com Club Page"/>
        <Circle image = {ambassador} link = {"./chesscom"} alt = "Chess.com Club Page"/>
      </div>
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
          <Route path="/chesscom" element={<Chesscom/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
