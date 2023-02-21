import React from "react";
import './Image.styles.css';

class Image extends React.Component {
    render() {
        return(
            // <div id="preview-image">
            // </div>
            <div id="preview-image">
                <img src="/images/image-hero-desktop_2_55.png" alt="hero" />
            </div>
        );
    }
}

export default Image;