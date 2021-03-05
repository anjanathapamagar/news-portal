import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "../main.css"
export default class ImageSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagePosition: 0
        };
    }

    onLeftArrowClick = () => {
        let { imagePosition } = this.state;
        const totalImages = this.props.images.length;
        if (totalImages > 0) {
            if (imagePosition === 0) {
                imagePosition = totalImages - 1;
            } else {
                imagePosition--;
            }
            this.setState({ imagePosition });
        }
    };

    onRightArrowClick = () => {
        let { imagePosition } = this.state;
        const totalImages = this.props.images.length;
        if (totalImages > 0) {
            if (imagePosition === (totalImages - 1)) {
                imagePosition = 0;
            } else {
                imagePosition++;
            }
            this.setState({ imagePosition });
        }
    };

    render() {
        const { imagePosition } = this.state;
        const { images } = this.props;
        return (
            <div className="col-12 p-0 mt-3 slider-image-wrapper">
                <img src={`data:${images[imagePosition].mimetype};base64,${images[imagePosition].buffer}`} alt={`news cover at position ${imagePosition}`} className="forimage" />
                {/* <FontAwesomeIcon onClick={this.onLeftArrowClick} icon={faAngleLeft} style={{ height: "6vh", width: "6vh", position: "absolute", left: "0", top: "29vh", color: "red", cursor: "pointer", zIndex: "999!important" }} />
                <FontAwesomeIcon onClick={this.onRightArrowClick} icon={faAngleRight} style={{ height: "6vh", width: "6vh", position: "absolute", right: "0", top: "29vh", color: "red", cursor: "pointer", zIndex: "999!important" }} /> */}
            </div>
        );
    }
}