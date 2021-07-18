import React, {Component} from 'react';

class GetStarted extends Component {
    render() {
        return (
            <div className="get-started" id="get-started">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p className="text-center" id="about-text-1">Get Started with PrivoVPN</p>
                </div>

                <div style={{marginTop: '1%', marginLeft: '5%'}}>
                    <p id="about-text-2">1. Choose a plan</p>
                </div>

                <div className="row" style={{marginTop: '2%'}}>
                    <div className="col d-flex align-items-stretch" style={{marginLeft: '5%'}}>
                        <div className="card card-custom bg-white border-white border-0" style={{borderRadius: '20px'}}>
                            <div className="card-custom-img" style={{backgroundImage: 'url(https://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)'}}/>
                            <div className="card-body" style={{overflowY: 'auto'}}>
                                <h4 className="card-title" id="plan-card-title">1 Month</h4>
                                <p className="card-text" id="plan-card-body">Billed every month. Additional taxes may
                                    apply depending on your jurisdiction..</p>
                            </div>
                            <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
                                <p className="alert text-center" role="alert"
                                   style={{backgroundColor: '#EEEEEE', borderRadius: '15px', fontFamily: 'Montserrat, sans-serif', borderColor: '#3B3B3B'}}>
                                    <strong>CAD 10.99/mo</strong></p>
                                <a onClick={this.redirectPurchasePlan} className="btn btn-success mx-auto d-block"
                                   style={{color: 'white', borderRadius: '15px', fontFamily: 'Montserrat, sans-serif'}}>Purchase Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex align-items-stretch" style={{marginLeft: '5%'}}>
                        <div className="card card-custom bg-white border-white border-0" style={{borderRadius: '20px'}}>
                            <div className="card-custom-img" style={{backgroundImage: 'url(https://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)'}}/>
                            <div className="card-body" style={{overflowY: 'auto'}}>
                                <h4 className="card-title" id="plan-card-title">12 months - Save 64%</h4>
                                <p className="card-text" id="plan-card-body">Billed CAD 47.88 every 12 months.
                                    Additional taxes may apply depending on your jurisdiction.</p>
                            </div>
                            <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
                                <p className="alert text-center" role="alert"
                                   style={{backgroundColor: '#EEEEEE', borderRadius: '15px', fontFamily: 'Montserrat, sans-serif', borderColor: '#3B3B3B'}}>
                                    <strong><strike>CAD 10.99/mo</strike></strong>
                                    <br/>
                                    <strong>CAD 3.99/mo</strong></p>
                                <a onClick={this.redirectPurchasePlan} className="btn btn-success mx-auto d-block"
                                   style={{color: 'white', borderRadius: '15px', fontFamily: 'Montserrat, sans-serif'}}>Purchase Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex align-items-stretch" style={{marginLeft: '5%', marginRight: '5%'}}>
                        <div className="card card-custom bg-white border-white border-0" style={{borderRadius: '20px'}}>
                            <div className="card-custom-img" style={{backgroundImage: 'url(https://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)'}}/>
                            <div className="card-body" style={{overflowY: 'auto'}}>
                                <h4 className="card-title" id="plan-card-title">6 months - Save 46%</h4>
                                <p className="card-text" id="plan-card-body">Billed CAD 35.94 every 6 months.
                                    Additional taxes may apply depending on your jurisdiction.</p>
                            </div>
                            <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
                                <p className="alert text-center" role="alert"
                                   style={{backgroundColor: '#EEEEEE', borderRadius: '15px', fontFamily: 'Montserrat, sans-serif', borderColor: '#3B3B3B'}}>
                                    <strong>CAD 5.99/mo</strong></p>
                                <a onClick={this.redirectPurchasePlan} className="btn btn-success mx-auto d-block"
                                   style={{color: 'white', borderRadius: '15px', fontFamily: 'Montserrat, sans-serif'}}>Purchase Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div id="purchase-plan" style={{marginTop: '1%', marginLeft: '5%'}}>
                    <p id="about-text-2">2. Create a PrivoVPN account</p>
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-center" style={{width: '100%'}}>
                    <div className="card shadow" id="booking-card">
                        <div className="card-body" id="booking-panel-body">
                            <form id="booking-form">
                                <div className="question" id="q1">
                                    <p><img src={process.env.PUBLIC_URL + '/full-name-icon.png'} id="form-icon" style={{marginTop: '-0.25%'}}/><strong>What is your full name?</strong></p>
                                    <input className="form-control" id="q1-text-area" type="text" placeholder="Name"/>
                                </div>
                                <hr/>
                                <div className="question" id="q2">
                                    <p><img src={process.env.PUBLIC_URL + '/email-icon.png'} id="form-icon" style={{marginTop: '-0.25%'}}/><strong>What is your email address?</strong></p>
                                    <input className="form-control" id="q2-text-area" type="text" placeholder="name@example.com"/>
                                </div>
                                <hr/>
                                <div className="question" id="q3">
                                    <p><img src={process.env.PUBLIC_URL + '/credit-card-icon.png'} id="form-icon" style={{marginTop: '-0.25%'}}/><strong>Please enter your credit card number for payment</strong></p>
                                    <input className="form-control" id="q3-text-area" type="text" placeholder="XXXX-XXXX-XXXX-XXXX"/>
                                </div>
                                <hr/>
                            </form>

                            <a href="#" className="btn btn-primary mx-auto d-block" style={{color: 'white'}}>Book
                                Appointment</a>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }

    redirectPurchasePlan = () => {
        const yOffset = -150
        const location = document.getElementById('purchase-plan').getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: location, behavior: 'smooth'});
    }
}

export default GetStarted;