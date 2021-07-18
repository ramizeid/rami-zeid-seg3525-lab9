import React, {Component} from 'react';
import ReactTooltip from "react-tooltip";

class ChatButton extends Component {
    render() {
        return (
            <React.Fragment>
                <button data-tip data-for="chat-button-tooltip" id={"chat-button"} onClick={this.redirectSupport}>
                    <div className="tooltip">Test</div>
                    <img src={process.env.PUBLIC_URL + '/chat-button.png'} id="chat-button-icon" />
                </button>

                <ReactTooltip id="chat-button-tooltip" place="left" effect="solid">Need help? Chat with us!</ReactTooltip>
            </React.Fragment>
        );
    }

    redirectHome() {
        const currentUrl = window.location.href
        const alternateOriginUrl = window.location.origin + "/rami-zeid-seg3525-lab9"
        const alternateOriginUrl2 = window.location.origin + "/rami-zeid-seg3525-lab9#"
        const alternateOriginUrl3 = window.location.origin + "/"
        const alternateOriginUrl4 = window.location.origin + "/#"
        console.log(alternateOriginUrl)

        if (currentUrl !== alternateOriginUrl && currentUrl !== alternateOriginUrl2 && currentUrl !== alternateOriginUrl3 && currentUrl !== alternateOriginUrl4) {
            window.location.href = window.location.origin;
        }
    }

    redirectSupport = () => {
        this.redirectHome();

        const yOffset = -100
        const location = document.getElementById('support').getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: location, behavior: 'smooth'});
    }
}

export default ChatButton;