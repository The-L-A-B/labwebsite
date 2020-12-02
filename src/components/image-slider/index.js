import React from 'react';

const ImageSlider = ({image, classes}) => {
    return (
        <div className={`flexible-image ${classes ? classes : ''}`}>
            <div className="thumb">
                <img src={require('../../assets/img/flexible-image-slide/flexible-1/' + image)} alt="flexible"/>
            </div>
        </div>
    );
};

export default ImageSlider;