import React, {Component} from 'react';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';

class Support extends Component {
    messages = [
        {
            "text": "Thank you for visiting PrivoVPN. How can I help you today?",
            "id": "1",
            "sender": {
                "name": "PrivoVPN",
                "uid": "user2",
                "avatar": '/black-padlock.png',
            },
        },
    ]

    render() {
        return (
            <div className="support">
                <hr
                    style={{
                        height: '10px',
                        border: 'none',
                        backgroundColor: '#000000',
                        width: '100%',
                        opacity: 1
                    }}
                />

                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <p className="text-center" id="about-text-1"><img src={'/chat-bubbles-icon.png'} id="support-title-icon"/> Need help? Chat with us!</p>
                </div>
                <br/>
                <div id="support-chatbox">
                    {/* Chat box component courtesy of: https://www.npmjs.com/package/react-chatbox-component */}
                    <ChatBox messages={this.messages}/>
                </div>
                <br/>
            </div>
        );
    }
}

export default Support;