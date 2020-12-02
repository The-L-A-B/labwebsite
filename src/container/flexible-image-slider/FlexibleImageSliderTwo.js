 import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SlickSlider from "../../components/slick";
import ImageSlider from "../../components/image-slider";

const FlexibleImageSliderTwo = () => {

    // Slider Images
    const sliderImages = [
        "flexible-small--image-1.jpg",
        "flexible-small--image-2.jpg",
        "flexible-small--image-3.jpg",
        "flexible-small--image-5.jpg"
    ];

    const NextArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-right"/>
            </button>
        );
    };

    const PrevArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-left"/>
            </button>
        );
    };

    const settings = {
        slidesToShow: 3,
        dots: true,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                "breakpoint": 992,
                "settings": {
                    slidesToShow: 2
                }
            },
            {
                "breakpoint": 576,
                "settings": {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div
            className="flexible-image bg_color--1 section-separator-with--border slick-arrow-hover ptb--150 ptb-md--80 ptb-sm--60">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SlickSlider
                            settings={settings}
                            classes="brook-element-carousel slick-gutter-15 slick-arrow-center slick-dots-bottom"
                        >
                            {sliderImages.map((sliderImage, key) => (
                                <ImageSlider key={key} image={sliderImage}/>
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FlexibleImageSliderTwo;