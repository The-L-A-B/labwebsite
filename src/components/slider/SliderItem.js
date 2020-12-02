import React from 'react';
import Button from "../button";

const SliderItem = ({heading, content, bgImg, btnText, btnLink, center, className}) => {
    return (
        <div className={`slide-inner slide-bg-image ${center ? 'text-center' : ''} ${className}`} style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="slide-content">
                    <div data-swiper-parallax="300" className="slide-title">
                        <h2 dangerouslySetInnerHTML={{__html: heading}}/>
                    </div>
                    <div data-swiper-parallax="400" className="slide-text">
                        <p className={center ? 'mx-lg-auto' : ''} dangerouslySetInnerHTML={{__html: content}}/>
                    </div>
                    <div className="clearfix"/>
                    <div data-swiper-parallax="500" className="slide-btns">
                        <Button
                            type="link"
                            btnText={btnText}
                            btnLink={btnLink}
                            color="theme"
                            size={'sd'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;
