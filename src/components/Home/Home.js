import React from "react";
import { useEffect } from "react";

//URLs
var mchenrymap = "https://goo.gl/maps/RoCpDooDvBAZfWme9"

function Home() {
    useEffect(() => {
        document.title = "UCSC Chess Club"
    }, []);
    return(
        <div>
            <h1>Meetings</h1>
            <p>We meet at the tables in front of <a href = {mchenrymap}>McHenry Library</a>.</p>

        </div>
    );
}

export default Home;
