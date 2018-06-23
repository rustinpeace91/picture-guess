import React, { Component } from "react";
import Card from "../card/card";
import characters from "../../characters";
import "./grid.css";
import "lodash"

class Grid extends Component{
    state = {
        characters,
        guessed: []
    };

    componentDidMount(){
        this.shuffle(this.state.characters);
        console.log(this.state.guessed);
    }

    handleGuess(){
        var guess = "joy peters";
        if(this.state.guessed.includes(guess)){
            this.shuffle(this.state.characters)
        } else {
            this.props.handleIncrement();
            this.state.guessed.push(guess);
        }
    }

    shuffle(array){
        // Fisher Yates array shuffling method
        // Cannot figure out how to do this with array.map 
        // i needs to start at the length and go backwards
        let i = 0;
        let j = 0;
        let temp = null
        for (i = array.length-1; i > 0; i--){
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({
            characters:array
        })
        // this.setState({
        //   characters: _.shuffle(characters)  
        // })
    }

    render(){
        return (
            <div className = "row">
              {this.state.characters.map(character => (
			    <div className = "col col-md-4">
				    <button onClick={this.handleGuess}>
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