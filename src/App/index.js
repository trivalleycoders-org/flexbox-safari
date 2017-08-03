import React, { Component } from 'react';
import './App.css';
import TechLogos from '../TechLogos'
import Members from '../Members'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>flexbox-safari</h1>
        <TechLogos />
        <Members />
      </div>
    );
  }
}

export default App;
