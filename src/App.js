import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ChatButton from "./components/chat-button";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutUs from "./components/about-us";
import Product from "./components/product";
import Support from "./components/support";
import Footer from "./components/footer";
import GetStarted from "./components/get-started";

function App() {
    return (
        <Router>
            <div>
                <video id='background-video' autoPlay loop muted>
                    <source src={process.env.PUBLIC_URL + '/background-video.mp4'} type='video/mp4' />
                </video>
                <ChatButton/>

                <Navbar/>

                <Route exact path="/">
                    <Home/>
                    <AboutUs/>
                    <Product/>
                    <Support/>
                </Route>

                <Route exact path="/rami-zeid-seg3525-lab9">
                    <Home/>
                    <AboutUs/>
                    <Product/>
                    <Support/>
                </Route>

                <Route exact path="/#get-started">
                    <GetStarted/>
                </Route>

                <Route exact path="/rami-zeid-seg3525-lab9-get-started">
                    <GetStarted/>
                </Route>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
