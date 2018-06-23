import React, { Component } from 'react';
import Header from './header/header';
import Grid from "./grid/grid";

// the main component that ties everything together. 

class Wrapper extends Component {

    // state is lifted up to this component
    state = {
      score: 0,
      status: "click a picture to begin, after they shuffle, try not to click the same image"
    }
  
    // handles an increment in the score, displays a message
    handleIncrement = () => {
      this.setState({
          score:this.state.score + 1
      })
      this.setState({
          status: "Correct! keep going"
      })
  
    }
    
    // handles the score and message being reset
    handleReset = () => {
      this.setState({
          score: 0
      })
      this.setState({
        status: "Wrong! try again"
    })
  
    }
  
  
  
    render() {
      return (
        <div>
          <Header score={this.state.score} status={this.state.status}/>
  
          <div className="container">
            <Grid example="foo" handleIncrement={this.handleIncrement} handleReset={this.handleReset}/>
          </div>
        </div>
      );
    }
  }
  
  export default Wrapper;
  