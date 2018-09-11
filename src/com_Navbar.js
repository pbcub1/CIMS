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

import React, { Component } from 'react';

class Navbar extends Component {
    constructor( props ){
        super(props);

        //This will be used later
    }

    processClick( e, trigger ){
        e.preventDefault();
        this.props.callback({
            type: 'click_action',
            source: 'Navbar',
            trigger: trigger
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="">
                    <img className="navbar-brand-image" alt="Logo" src="https://launchpadtech.io/res/img/brand-ico.png" width="50" height="50" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'dash')}>Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'products')}>Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'orders')}>Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'reports')}>Reports</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e) => this.processClick(e, 'search')}>Search</button>
                </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
