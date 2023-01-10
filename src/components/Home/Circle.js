import React from "react";
import "./Home.css";

export default function Circle(props) {
    //const [isHovered, setHover] = React.useState(false)
    return (
        <div className="circletag">
            <a href = {props.link}><img src = {props.image} alt = {props.alt}/></a>
        </div>
    );
}