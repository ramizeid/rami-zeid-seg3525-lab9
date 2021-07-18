import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer text--center text--lg-left">
                <div className="container-fluid">
                    <br/>
                    <br/>
                    <br/>
                    <div className="row" style={{marginLeft: '10%'}}>
                        <div className="col col-xs-12">
                            <a className="navbar-brand" href="#" style={{maxWidth: '100%'}}>
                                <img className="img-responsive" src={'/white-privo-logo.png'} style={{width: '100px', marginTop: '2.5%'}}/>
                            </a>
                        </div>
                    </div>

                    <br/>

                    <div className="row" style={{marginLeft: '10%'}}>
                        <div className="col">
                            <address style={{maxWidth: '100%'}}>
                                <p><b>Contact Us</b></p>
                                <p style={{color: '#ffffff'}}>2446 Bank St, Ottawa, Canada</p>
                                <p style={{color: '#ffffff'}}>(613)-123-1234</p>
                            </address>
                        </div>

                        <div className="col">
                            <div>
                                <nav className="navigation">
                                    <div className="row">
                                        <div className="col col-xs-auto col-md-auto col-lg-4">
                                            <ul style={{listStyleType: 'none'}}>
                                                <li style={{marginBottom: '1rem'}}><a href="#" style={{color: '#ffffff'}}>Terms of Service</a></li>
                                                <li><a href="#" style={{color: '#ffffff'}}>Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div className="row" style={{marginLeft: '10%'}}>
                        <div className="col col-sm-10 col-md-8 col-lg-6">
                            <div>
                                <span style={{fontSize: '0.75rem', color: '#787878'}}>© 2021 PrivoVPN Corporation, All rights reserved</span>
                            </div>
                        </div>
                    </div>

                    <br/>
                </div>
            </footer>
        );
    }
}

export default Footer;