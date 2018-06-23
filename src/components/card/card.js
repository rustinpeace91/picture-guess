
import React from "react";
import "./card.css";


const Card = props => (
        <div className="card" >
            {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
            <div className="card-body">
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
)

export default Card;
