
import React from "react";

import "./header.css";

const Header = props => (
    <div className = "jumbotron">
        <div className = "header-image">
            <h1>Character Clicker Game</h1>
            <p>Score:{props.score}</p>
        </div>
    </div>

);






        
export default Header;