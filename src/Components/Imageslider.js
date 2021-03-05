import React, { Component } from 'react';

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
            <img src={`data:${images[imagePosition].mimetype};base64,${images[imagePosition].buffer}`} alt={`news cover at position ${imagePosition}`} className="img-thumbnail img-fluid rounded-0 imagecard" />
            </div>
    );
}
}