import React from "react";
import { useEffect } from "react";

var chesscom = "https://www.chess.com/news/view/college-ambassador-program"
var adminpage = "https://www.chess.com/club/club-admins"
var resources = "https://www.chess.com/clubs/forum/view/admin-guides-table-of-contents"

function Home() {
    useEffect(() => {
        document.title = "Chess.com Affiliation"
    }, []);
    return(
        <div>
            <h1>Chess.com Affiliation</h1>
            <p>Our Chess Club is affiliated with Chess.com as part of their <a href = {chesscom}>College Ambassador Program</a>.</p>

            <p>As an affiliate, we have access to these resources:</p>
            <ul>
                <li>Membership prizes for our club and from tournaments/events</li>
                <li>Extra memberships as we reach club milestones</li>
                <li>Chess.com merch shipped to our club</li>
                <li>Customized Chess.com QR code for club page</li>
            </ul>
            <h1>Club Admins</h1>
            <p>Several of us are also admins for our school's club page. We have access to these resources:</p>
            <ul>
                <li>Access to "Club Admins" <a href = {adminpage}>club page</a></li>
                <li>Curated <a href = {resources}>list of resources</a> for managing club events</li>
                <li>Monthly webinars for managing clubs</li>
            </ul>

        </div>
    );
}

export default Home;