import React from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const SlickSlider = ({children, settings, classes}) => {
    return (
        <Slick {...settings} className={classes}>
            {children}
        </Slick>
    );
};

export default SlickSlider;