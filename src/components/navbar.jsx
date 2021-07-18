import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark sticky-top" id="navbar">
                <a className="navbar-left" href="#" id="navbar-logo-div">
                    <img src={process.env.PUBLIC_URL + '/white-privo-logo.png'} id="navbar-logo" />
                </a>
                <a className="navbar-brand" href="#" id="navbar-title">PrivoVPN</a>

                <ul className="navbar-nav ms-auto" id="navbar-options-div">
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-option">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-vertical-bar">|</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-option">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-vertical-bar">|</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-option">Support</a>
                    </li>
                </ul>

                <button className="btn btn-success" id="get-started-btn">Get Started</button>
            </nav>
        );
    }
}

export default Navbar;