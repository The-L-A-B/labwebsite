import React, {useState} from 'react';
import SliderSwiper from "../../components/swiper";
import ImageSlider from "../../components/image-slider";

const FlexibleImageSliderThree = () => {
    const [swiper, updateSwiper] = useState(null);
    // Slider Images
    const sliderImages = [
        "flexible-lg--image-1.jpg",
        "flexible-lg--image-2.jpg",
        "flexible-lg--image-3.jpg",
        "flexible-lg--image-4.jpg",
        "flexible-lg--image-5.jpg"
    ];

    const settings = {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-btn-prev',
            prevEl: '.swiper-btn-next',
        },
        breakpoints: {
            600: {
                slidesPerView: 2
            }
        }
    };

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    return (
        <div
            className="flexible-image bg_color--1 swipper-custom-arrow swipper-custom-dots ptb--150 ptb-md--80 ptb-sm--60">
            <SliderSwiper
                reference={updateSwiper}
                settings={settings}
                containerClass="flexibleimage__wrapper"
            >
                {sliderImages.map((sliderImage, key) => (
                    <ImageSlider key={key} image={sliderImage} classes="swiper-slide"/>
                ))}
            </SliderSwiper>
            <button onClick={goPrev} className="swipper-btn swiper-btn-prev">
                <i className="fa fa-angle-left"/>
            </button>
            <button onClick={goNext} className="swipper-btn swiper-btn-next">
                <i className="fa fa-angle-right"/>
            </button>
        </div>
    );
};

export default FlexibleImageSliderThree;