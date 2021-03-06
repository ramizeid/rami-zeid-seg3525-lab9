import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home container-fluid vh-100">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p className="text-center" id="landing-text-1">Privacy for all</p>
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <img src={process.env.PUBLIC_URL + '/black-padlock.png'} id="home-logo" />
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p className="text-center" id="landing-text-2">The VPN that secures your digital life</p>
                </div>

                <div className="col text-center">
                    <button className="btn btn-success text-center" id="home-get-vpn-btn" onClick={this.redirectGetStarted}>Get PrivoVPN <img src={process.env.PUBLIC_URL + '/white-right-arrow.png'} id="home-get-vpn-btn-arrow" /></button>
                </div>
                <br/>
            </div>
        );
    }

    redirectGetStarted() {
        const baseUrl = window.location.origin
        const currentUrl = window.location.href
        const path = "rami-zeid-seg3525-lab9-get-started"

        if (!currentUrl.includes(path)) {
            window.location.href = baseUrl + "/" + path;
        }
    }
}

export default Home;