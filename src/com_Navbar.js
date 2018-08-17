import React, { Component } from 'react';

class Navbar extends Component {
    constructor( props ){
        super(props);

        //This will be used later
    }

    processClick( e, trigger ){
        e.preventDefault();
        console.log(trigger);
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
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'dash')} href="#">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'products')} href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'orders')} href="#">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.processClick(e, 'reports')} href="#">Reports</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
