import React, { Component } from "react";
import Card from "../card/card";
import characters from "../../characters";
import "./grid.css";
// import "lodash"
// import masterShake from "../../../public/assets/images/shake.jpg"

class Grid extends Component{
    state = {
        characters,
        guessed: []
    };

    componentDidMount(){
        this.shuffle(this.state.characters);
    }

    handleGuess(guess){
        if(this.state.guessed.includes(guess)){
            this.shuffle(this.state.characters)
            this.setState({
                guessed:[]
            })
            this.props.handleReset();
        } else {
            this.props.handleIncrement();
            this.state.guessed.push(guess);
            this.shuffle(this.state.characters)
        }
    }

    shuffle(array){
        // Fisher Yates array shuffling method
        // Cannot figure out how to do this with array.map or ES6
        // it needs to start at the length and go backwards
        // there are ways I found to use array.map and array.reduceRight(), but they were far more inconvenient than just doing it the old fashioned way
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

        // attempted to import a library to take care of this for me. did not work
        // this.setState({
        //   characters: _.shuffle(characters)  
        // })
    }

    render(){
        return (
            <div className = "row">
              {this.state.characters.map(character => (
			    <div className = "col col-md-4">
				    <button onClick={() => this.handleGuess(character.id)}>
					    <Card key = {character.id} img = {character.image} id = {character.id} name = {character.name}/> 
					</button>
				</div>
			   ))
			   }
							
            </div>
        );
    };
}

export default Grid;