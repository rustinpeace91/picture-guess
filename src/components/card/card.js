// renders a single card for each character

import React from "react";
import "./card.css";


const Card = props => (
        <div className="card" >

            <img className="card-img-top" src={props.img} alt={props.name}/>

        </div>
)

export default Card;
