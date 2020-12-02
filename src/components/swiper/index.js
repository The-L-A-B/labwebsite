import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'

const SliderSwiper = ({children, settings, reference, containerClass, wrapperClass}) => {
    return (
        <Swiper
            {...settings}
            getSwiper={reference && reference}
            containerClass={containerClass && containerClass}
            wrapperClass={wrapperClass && wrapperClass}
        >
            {children}
        </Swiper>
    );
};

export default SliderSwiper;