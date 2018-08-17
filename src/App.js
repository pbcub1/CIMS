//Active Imports
import React, { Component } from 'react';
import './App.css';

//Planned Imports
import $ from 'jquery';

//Component Imports
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
        {/*Core*/}
        {/*Footer*/}
      </div>
    );
  }
}

export default App;
