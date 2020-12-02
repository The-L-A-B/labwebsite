import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SlickSlider from "../../components/slick";

const FlexibleImageSliderFour = () => {

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
        dots: false,
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
                    slidesToShow: 1,
                    dots:true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div
            className="bk-carousel-slider bg_color--1 slick-arrow-hover pb_sm--60">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SlickSlider
                            settings={settings}
                            classes="brook-element-carousel slick-arrow-center slick-dots-bottom slick-gutter-15"
                        >
                            {data.map(item => (
                                <div key={item.id} className="carousel-slider text-center">
                                    <div className="thumb">
                                        <img src={require('../../assets/img/' + item.thumb)} alt="Carousel"/>
                                    </div>
                                </div>
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const data = [
    {
        id: 1,
        thumb: "carousel/cat2-md-1.jpg"
    },
    {
        id: 2,
        thumb: "carousel/cat2-md-2.jpg"
    },
    {
        id: 3,
        thumb: "carousel/cat2-md-3.jpg"
    },
    {
        id: 4,
        thumb: "carousel/cat2-md-4.jpg"
    }
]

export default FlexibleImageSliderFour;