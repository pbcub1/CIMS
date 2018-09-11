/*CIMS, The open source Cloud Inventory Management System.
Copyright (C) 2018 Launchpad Technical Solutions LLC and David Green <pbcub1.dg@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.*/

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

//PRODUCTION BUILD CHECKLIST:
//Fork to staging
//Take out debug code
//Tune production settings
//Fork to production
//Upload changed production files.

class App extends Component {
  
  //constructor: Set default application state.
  constructor( props ){
    super(props);

    this.appstate = {
      applicationState : {
        state: 'AUTH',  //RUNNING, CLOSING
        env: {
          type: 'DEV', //PRO, BETA
          build: '0.1.0.1', //Major release. Minor release. Update. Development build number.
          settings: {
            authenticated: true //false
          }
        },
        core: 'LOADING', //INV_MAIN, INV_COUNT, ORDER_OUT, ORDER_IN, FORECASTING
        optionsPanel: 'CLOSED', //OPEN_APPSETTINGS, OPEN_USERSETTINGS
      }
    };

    this.state = this.appstate;
  }

  //updateState: Update the state with the current application state so the app will rerender.
  updateState () {
    this.setState(this.appstate);
  }

  //componentWillMount: This is here to auth the user and load information on application start, perhaps to process runtime requests too. 
  componentWillMount(){
    //Auth user, load information, redirect if necessary.

    switch(this.state.applicationState.state){
      case 'AUTH':
        //This is where the real magic happens. This is where the application is going to authenticate itself and redirect if not authenticated.
        //It will then load the information that it neads.

        //Authentication
        if(typeof(Storage) !== "undefined"){
          if(localStorage.token !== undefined && localStorage.UID !== undefined){
            //TODO: Add if statement to be able to turn off authenticated state.
            $.ajax({
              //TODO: Put in server URL
              url: '',
              method: 'POST',
              data: {
                module: 'AUTH_USER',
                authToken: localStorage.token,
                UID: localStorage.UID
              }
            }).done(function (){
              //Function that is fired when the request comes back.
              //TODO: Review Authentication.
              //TODO: Load information
            }.bind(this));
          }else{
            //User doesn't have access to this website.
            //TODO: Redirect to login application.
            if( this.appstate.applicationState.env.type == 'DEV' &&
                this.appstate.applicationState.env.settings.authenticated ){
              //TODO: Set localStorage state.
            }
          }
        }else{
          //No localstorage...
          //TODO: Redirect to not supported page.
        }
        
        break;
      case 'RUNNING':
        //Might be cut because I can't think of a reason to calculate anything here right now.
        break;
      case 'CLOSING':
        //Probably will be cut because I can't think of a reason for this to be here right now.
        break;
      default:
        //This shouldn't happen. Notify server, review application variables, correct application, or reload.
        break;
    }
  }

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
