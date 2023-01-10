import React from "react";
import badge from "../../images/badge.png"
import ambassador from "../../images/ambassador.png"
import "./Badge.css"
export default function Circle(props) {
    //const [isHovered, setHover] = React.useState(false)
    return (
        <div>
            <div>
            <div>
                <img src={badge} className="badge" alt=""/>
            </div>
            <img src={ambassador} className="ambassador" alt=""/>
            </div>
        </div>
    );
}