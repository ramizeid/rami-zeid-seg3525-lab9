import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us" id="about-us">
                <hr
                    style={{
                        height: '10px',
                        border: 'none',
                        backgroundColor: '#000000',
                        width: '100%',
                        marginTop: '-7%',
                        opacity: 1
                    }}
                />

                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p className="text-center" id="about-text-1">About Us</p>
                </div>

                {/* Text courtesy of: https://www.expressvpn.com/ */}
                <div className="row" style={{marginTop: '2%'}}>
                    <div className="col text-center">
                        <img src={process.env.PUBLIC_URL + '/question-mark-icon.png'} id="about-us-icon"/>
                            <p id="about-text-2"><strong>What is a VPN?</strong></p>
                        <p id="about-text-3">A VPN (<strong>virtual private network</strong>) is the easiest and most effective way
                                for people to protect their internet traffic and keep their identities private online.
                                <br/>
                                <br/>
                                As you connect to a secure VPN server, your internet traffic goes through an encrypted tunnel
                                that nobody can see into, including hackers, governments, and your internet service provider.
                        </p>
                    </div>
                    <div className="col text-center">
                        <img src={process.env.PUBLIC_URL + '/people-icon.png'} id="about-us-icon"/>
                            <p id="about-text-2"><strong>Who should use a VPN?</strong></p>
                            <p id="about-text-3"><strong>Consumers use VPNs</strong> to keep their online activity private and ensure
                                access to sites and services that might otherwise be restricted.
                                <br/>
                                <br/>
                                <strong>Companies use VPNs</strong> to connect far-flung employees as if they were all using the same
                                local network at a central office, but with fewer benefits for individuals than a personal VPN.
                        </p>
                    </div>
                </div>
                <br/>
                <hr
                    style={{
                        height: '10px',
                        border: 'none',
                        backgroundColor: '#000000',
                        width: '100%',
                        opacity: 1
                    }}
                />
            </div>
        );
    }
}

export default AboutUs;