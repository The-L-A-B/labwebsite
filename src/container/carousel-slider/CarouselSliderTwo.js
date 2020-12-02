import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SlickSlider from "../../components/slick";
import CarouselSliderItem from "../../components/carousel-slider";
import carouselSliderData from '../../data/carousel-slider';

const CarouselSliderTwo = () => {

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
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        dots: true,
        responsive: [
            {
                "breakpoint": 801,
                "settings": {
                    slidesToShow: 2
                }
            },
            {
                "breakpoint": 577,
                "settings": {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="bk-carousel-slider bg_color--1 section-separator-with--border ptb--150 slick-arrow-hover ptb-md--80 ptb-sm--60">
            <Container>
                <Row>
                    <Col xs={12} className="pb--60">
                        <SlickSlider settings={settings}
                                     classes="brook-element-carousel slick-arrow-center slick-dots-bottom slick-gutter-15">
                            {carouselSliderData.map(carousel => (
                                <CarouselSliderItem
                                    key={carousel.id}
                                    center={false}
                                    title={carousel.title}
                                    content={carousel.content}
                                    thumb={carousel.thumb}
                                />
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CarouselSliderTwo;