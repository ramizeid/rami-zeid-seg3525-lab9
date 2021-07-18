import React, {Component} from 'react';
import ReactTooltip from "react-tooltip";

class ChatButton extends Component {
    render() {
        return (
            <React.Fragment>
                <button data-tip data-for="chat-button-tooltip" id={"chat-button"}>
                    <div className="tooltip">Test</div>
                    <img src={process.env.PUBLIC_URL + '/chat-button.png'} id="chat-button-icon" />
                </button>

                <ReactTooltip id="chat-button-tooltip" place="left" effect="solid">Need help? Chat with us!</ReactTooltip>
            </React.Fragment>
        );
    }
}

export default ChatButton;