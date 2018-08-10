import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

//Components
import Navbar from './com_Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
