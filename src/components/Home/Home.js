import React from "react";
import { useEffect } from "react";

import Circle from "./Circle"

//images
import discord from "../../images/discord.png"
import chess from "../../images/chess.png"

//URLS
var discordLink = "https://discord.com/invite/hgU4WFje6Y"
var chessPage = "https://www.chess.com/club/chess-club-at-university-of-california-santa-cruz"
var mchenrymap = "https://goo.gl/maps/RoCpDooDvBAZfWme9"

function Home() {
    useEffect(() => {
        document.title = "UCSC Chess Club"
    }, []);
    return(
        <div>
            <h1>Meetings</h1>
            <p>We meet at the tables in front of <a href = {mchenrymap}>McHenry Library</a>.</p>
            <h1>Join Our Club</h1>
            <Circle image = {discord} link = {discordLink} alt = "Discord Invite"/>
            <Circle image = {chess} link = {chessPage} alt = "Chess.com Club Page"/>

        </div>
    );
}

export default Home;
