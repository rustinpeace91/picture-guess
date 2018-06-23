import React, { Component } from "react";
import Card from "../card/card";
import characters from "../../characters";
import "./grid.css";


class Grid extends Component{
    state = {
        characters
    };

    render(){
        return (
            <div className = "row">
              {this.state.characters.map(character => (
									<div className = "col col-md-4">
										<button onClick={this.props.handleIncrement}>
											<Card key = {character.id} id = {character.id} name = {character.name}/> 
										</button>
									</div>
								))
							}
							
            </div>
        );
    };
}

export default Grid;