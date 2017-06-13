import React, { Component } from 'react';
import { Link } from 'react-router';
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
          <li><Link to="funny">funny</Link></li>
          <li><Link to="reactjs">reactjs</Link></li>
          <li><Link to="holdmybeer">holdmybeer</Link></li>
          <li><Link to="gifsthatkeepongiving">gifsthatkeepongiving</Link></li>
        </ul>
        { this.props.children }

      </div>
    );
  }
}

export default App;
