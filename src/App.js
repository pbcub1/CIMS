import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

//Components
import Navbar from './com_Navbar.js';
import SideNavi from './com_SideNavi.js';
import OptionsPanel from './com_OptionsPanel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideNavi />
        <OptionsPanel />
      </div>
    );
  }
}

export default App;
