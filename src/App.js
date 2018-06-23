import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header/header';
import './App.css';
import Grid from "./components/grid/grid";


class App extends Component {
  state = {
    score: 0,
    status: "click a picture to begin, after they shuffle, try not to click the same image"
  }

  handleIncrement = () => {
    this.setState({
        score:this.state.score + 1
    })
    this.setState({
        status: "Correct! keep going"
    })

  }

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

export default App;
