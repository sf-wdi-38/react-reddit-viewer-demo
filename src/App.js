import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Reddit Viewer</h2>
          <ul>
            <li><Link to="/funny">funny</Link></li>
            <li><Link to="/reactjs">reactjs</Link></li>
            <li><Link to="/holdmybeer">holdmybeer</Link></li>
            <li><Link to="/gifsthatkeepongiving">gifsthatkeepongiving</Link></li>
          </ul>
        </div>
        { this.props.children }

      </div>
    );
  }
}

export default App;
