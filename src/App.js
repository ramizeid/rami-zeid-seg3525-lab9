import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ChatButton from "./components/chat-button";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutUs from "./components/about-us";
import Product from "./components/product";
import Support from "./components/support";
import Footer from "./components/footer";

function App() {
    return (
        <React.Fragment>
            {/* Components that are on the entire website */}
            <video id='background-video' autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + '/background-video.mp4'} type='video/mp4' />
            </video>
            <ChatButton/>

            {/* Actual Components */}
            <Navbar/>
            <Home/>
            <AboutUs/>
            <Product/>
            <Support/>
            <Footer/>

            {/* Extra Pages */}
        </React.Fragment>
    );
}

export default App;
