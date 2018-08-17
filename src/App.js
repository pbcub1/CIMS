import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

//Components
import Navbar from './com_Navbar.js';
import SideNavi from './com_SideNavi.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideNavi />
      </div>
    );
  }
}

export default App;
