import React, {Component} from 'react';
// import $ from 'jquery';
import {Button, Modal} from "bootstrap";

class Product extends Component {
    state = {
        loadingComparisonModalOpen: false
    }

    render() {
        return (
            <div className="product">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p id="about-text-1">Product</p>
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-center" style={{marginTop: '1%'}}>
                    <p className="text-center" id="about-text-2">Why choose PrivoVPN? Here are our key features:</p>
                </div>

                {/* Text courtesy of: https://www.expressvpn.com/ */}
                <table className="table table-striped" id="product-description-table">
                    <thead>
                        <tr/>
                    </thead>
                    <tbody>
                        <tr className="table-dark">
                            <td id="product-table-dark-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column">
                                        <img src={'/map-icon.png'} id="product-table-icon"/>
                                    </div>
                                    <div className="col">More VPN locations</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-light">
                            <td id="product-table-light-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column"/>
                                    <div className="col">Connect your device to a huge network of 500 server locations in 100 countries.</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-dark">
                            <td id="product-table-dark-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column">
                                        <img src={'/world-icon.png'} id="product-table-icon"/>
                                    </div>
                                    <div className="col">Superior connection reliability</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-light">
                            <td id="product-table-light-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column"/>
                                    <div className="col">Enjoy industry-leading connection stability and reliability, no matter where you are in the world.</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-dark">
                            <td id="product-table-dark-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column">
                                        <img src={'/speed-icon.png'} id="product-table-icon"/>
                                    </div>
                                    <div className="col">Optimized for speed</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-light">
                            <td id="product-table-light-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column"/>
                                    <div className="col">PrivoVPN constantly optimizes servers to deliver the fastest speeds possible.</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-dark">
                            <td id="product-table-dark-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column">
                                        <img src={'/language-icon.png'} id="product-table-icon"/>
                                    </div>
                                    <div className="col">Multilingual interface</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-light">
                            <td id="product-table-light-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column"/>
                                    <div className="col">Is English not your first choice? Try PrivoVPN in any of 20 other languages.</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="table-dark">
                            <td id="product-table-dark-text">
                                <div className="row">
                                    <div className="col" id="product-table-icon-column">
                                        <img src={'/three-dots-icon.png'} id="product-table-dots-icon"/>
                                    </div>
                                    <div className="col">And much more!</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="col text-center">
                    <button className="btn btn-success text-center" id="product-compare-vpn-button" data-bs-toggle="modal" data-bs-target="#loadingComparisonModal" onClick={this.loadingComparisonModalClick}>Compare Performance with Other VPNs</button>
                </div>

                <div className="modal fade" id="loadingComparisonModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loadingComparisonModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                Please wait while our system compares the performance of PrivoVPN with 3 other services. This may take up to a minute.
                                <br/>
                                <br/>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Comparing Services Performance</span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{marginLeft: 'auto', marginRight: 'auto'}} onClick={() => {this.state.loadingComparisonModalOpen = false; this.setState({loadingComparisonModalOpen: false});}}>Cancel Comparison</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="comparisonModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="comparisonModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center" id="exampleModalLabel" style={{marginLeft: 'auto', marginRight: 'auto'}}>Comparison of VPN Services</h5>
                            </div>
                            <div className="modal-body text-center">
                                <table className="table table-striped table-bordered" id="product-compare-vpn-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Logo</th>
                                            <th scope="col">VPN</th>
                                            <th scope="col">Average Connection Speed when Connected to the Nearest Server out of 100 MB per Second</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td><img src={'/black-privo-logo.png'} id="product-compare-table-icon"/></td>
                                            <th scope="row">PrivoVPN</th>
                                            <td><u>{this.getRandomNumber(75, 95)}</u></td>
                                        </tr>
                                        <tr>
                                            <td><img src={'/expressvpn-logo.png'} id="product-compare-table-icon"/></td>
                                            <th scope="row">ExpressVPN</th>
                                            <td>{this.getRandomNumber(30, 60)}</td>
                                        </tr>
                                        <tr>
                                            <td><img src={'/nordvpn-logo.png'} id="product-compare-table-icon"/></td>
                                            <th scope="row">NordVPN</th>
                                            <td>{this.getRandomNumber(30, 60)}</td>
                                        </tr>
                                        <tr>
                                            <td><img src={'/surfshark-logo.png'} id="product-compare-table-icon"/></td>
                                            <th scope="row">Surfshark</th>
                                            <td>{this.getRandomNumber(30, 60)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{marginLeft: 'auto', marginRight: 'auto'}}>Close Comparison</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }

    loadingComparisonModalClick = () => {
        this.state.loadingComparisonModalOpen = true;
        this.setState({loadingComparisonModalOpen: true});

        setTimeout(() => {
            let loadingComparisonModalOpen = this.state.loadingComparisonModalOpen;

            if (loadingComparisonModalOpen) {
                window.$('#loadingComparisonModal').modal('hide');
                window.$('#comparisonModal').modal('toggle');
            }
        }, 2000);
    }

    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}

export default Product;