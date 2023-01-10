import React from "react";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "UCSC Chess Club"
    }, []);
    return(
        <div>

        </div>
    );
}

export default Home;
