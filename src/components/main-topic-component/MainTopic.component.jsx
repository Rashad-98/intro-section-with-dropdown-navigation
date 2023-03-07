import React from "react";
import "./MainTopic.styles.css";

export default class MainTopic extends React.Component {
    render() {
        return(
            <div id="main-topic">
                <h1 id="main-title">
                    Make <br/>remote work
                </h1>
                <p>
                    Get your team in sync, no matter you location. <br/>
                    Streamline processes, create team rituals, and <br/> watch productivity soar.
                </p>
                <button>
                    Learn more
                </button>
            </div>
        )
    }
}

//TODO: fix the button
//      adjust the vartical spacing of the main content