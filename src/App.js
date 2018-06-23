import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header/header';
import './App.css';
import Grid from "./components/grid/grid";


class App extends Component {
  state = {
    score: 0
  }

  handleIncrement = () => {
    this.setState({
        score:this.state.score + 1
    })

  }

  handleReset = () => {
    this.setState({
        score: 0
    })

  }



  render() {
    return (
      <div>
        <Header score={this.state.score}/>

        <div className="container">
        <button onClick={this.handleReset}>RESET</button>
          <Grid example="foo" handleIncrement={this.handleIncrement}/>
        </div>
      </div>
    );
  }
}

export default App;
