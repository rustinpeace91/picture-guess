import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';


class App extends Component {
state ={};


// most of the content is contained in the 'Wrapper' component, to keep the App.js cleaner
  render() {
    return (
      <div>
        <Wrapper/>
      </div>
    );
  }
}

export default App;
