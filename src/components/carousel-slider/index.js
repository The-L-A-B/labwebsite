import React from 'react';

const CarouselSliderItem = ({center, title, content, thumb}) => {
    return (
        <div className={`carousel-slider ${center ? "text-center" : 'text-left'}`}>
            {thumb && (
                <div className="thumb">
                    <img src={require('../../assets/img/carousel/' + thumb)} alt="Carousel"/>
                </div>
            )}
            <div className="content">
                <div className="spacing"/>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default CarouselSliderItem;