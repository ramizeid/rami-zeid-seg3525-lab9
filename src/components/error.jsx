import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <div className="error" id="error">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p className="text-center" id="about-text-1"><img src={process.env.PUBLIC_URL + '/sad-face-icon.png'} id="support-title-icon"/> We're sorry, something went wrong!</p>
                </div>
                <br/>
                <div className="container-fluid d-flex align-items-center justify-content-center" style={{marginTop: '1%'}}>
                    <p className="text-center" id="about-text-2" style={{marginLeft: '20%', marginRight: '20%'}}>The page you're trying to access doesn't appear to exist.
                        Please click the button below to be redirected back to our landing screen.
                        <br/>
                        <br/>
                        If this error persists, please contact us by clicking the chat button on the bottom right corner of your screen.</p>
                </div>

                <div className="col text-center">
                    <button className="btn btn-success text-center" id="home-get-vpn-btn" onClick={this.redirectHome}><img src={process.env.PUBLIC_URL + '/white-right-arrow.png'} id="error-return-btn-arrow" /> Go back to the landing page</button>
                </div>
                <br/>
            </div>
        );
    }

    redirectHome() {
        const currentUrl = window.location.href
        const alternateOriginUrl = window.location.origin + "/rami-zeid-seg3525-lab9/"
        const alternateOriginUrl2 = window.location.origin + "/rami-zeid-seg3525-lab9/#"
        const alternateOriginUrl3 = window.location.origin + "/"
        const alternateOriginUrl4 = window.location.origin + "/#"

        if (currentUrl !== alternateOriginUrl && currentUrl !== alternateOriginUrl2 && currentUrl !== alternateOriginUrl3 && currentUrl !== alternateOriginUrl4) {
            window.location.href = alternateOriginUrl;
        }
    }
}

export default Error;