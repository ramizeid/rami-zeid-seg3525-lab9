import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark sticky-top" id="navbar">
                <a className="navbar-left" href="#" onClick={this.redirectHome} id="navbar-logo-div">
                    <img src={process.env.PUBLIC_URL + '/white-privo-logo.png'} id="navbar-logo" />
                </a>
                <a className="navbar-brand" href="#" onClick={this.redirectHome} id="navbar-title">PrivoVPN</a>

                <ul className="navbar-nav ms-auto" id="navbar-options-div">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.redirectAboutUs} id="navbar-option">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-vertical-bar">|</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.redirectProduct} id="navbar-option">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navbar-vertical-bar">|</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.redirectSupport} id="navbar-option">Support</a>
                    </li>
                </ul>

                <button className="btn btn-success" id="get-started-btn" onClick={this.redirectGetStarted}>Get Started</button>
            </nav>
        );
    }

    redirectHome() {
        const currentUrl = window.location.href
        const alternateOriginUrl = window.location.origin + "/rami-zeid-seg3525-lab9"
        const alternateOriginUrl2 = window.location.origin + "/rami-zeid-seg3525-lab9#"
        const alternateOriginUrl3 = window.location.origin + "/"
        const alternateOriginUrl4 = window.location.origin + "/#"

        if (currentUrl !== alternateOriginUrl && currentUrl !== alternateOriginUrl2 && currentUrl !== alternateOriginUrl3 && currentUrl !== alternateOriginUrl4) {
            window.location.href = window.location.origin;
        }
    }

    redirectAboutUs = () => {
        this.redirectHome();

        const yOffset = -100
        const location = document.getElementById('about-us').getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: location, behavior: 'smooth'});
    }

    redirectProduct = () => {
        this.redirectHome();

        const yOffset = -100
        const location = document.getElementById('product').getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: location, behavior: 'smooth'});
    }

    redirectSupport = () => {
        this.redirectHome();

        const yOffset = -100
        const location = document.getElementById('support').getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: location, behavior: 'smooth'});
    }

    redirectGetStarted() {
        const baseUrl = window.location.origin
        const currentUrl = window.location.href
        const path = "get-started"

        if (!currentUrl.includes(path)) {
            window.location.href = baseUrl + "/"+ path;
        }
    }
}

export default Navbar;