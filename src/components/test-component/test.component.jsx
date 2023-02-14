import React from "react";
import "./test.styles.css"

class Test extends React.Component {
    render() {
        return(
            <div className="test-div">
                <div className="first-div">
                    hello
                </div>
                <div className="second-div">
                    hello second
                </div>
            </div>
        )
    }
}

export default Test;