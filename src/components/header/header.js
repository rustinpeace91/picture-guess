
import React from "react";

import "./header.css";
// contains the title, the score and the message
const Header = props => (
    <div className = "jumbotron">
        <div className = "header-image">
            <h1>Character Clicker Game</h1>
            <p>Score:{props.score}</p>
            <p>{props.status}</p>
        </div>
    </div>

);






        
export default Header;