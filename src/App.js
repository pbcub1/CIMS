//Active Imports
import React, { Component } from 'react';
import './App.css';

//Planned Imports
import $ from 'jquery';

//Component Imports
import Navbar from './com_Navbar.js';
import SideNavi from './com_SideNavi.js';
import OptionsPanel from './com_OptionsPanel.js';
import Core from './com_Core.js';
import Footer from './com_Footer.js';

class App extends Component {
  callback = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Navbar callback = {this.callback}/>
        <SideNavi callback = {this.callback}/>
        <OptionsPanel callback = {this.callback}/>
        <Core callback = {this.callback}/>
        <Footer callback = {this.callback}/>
      </div>
    );
  }
}

export default App;
