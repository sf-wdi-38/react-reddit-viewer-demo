import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Reddit Viewer</h2>
        </div>
        <ul>
          <li>funny</li>
          <li>reactjs</li>
          <li>holdmybeer</li>
          <li>gifsthatkeepongiving</li>
        </ul>
      </div>
    );
  }
}

export default App;
