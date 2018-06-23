import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header/header';
import './App.css';
import Grid from "./components/grid/grid";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Grid/>
        </div>
      </div>
    );
  }
}

export default App;
