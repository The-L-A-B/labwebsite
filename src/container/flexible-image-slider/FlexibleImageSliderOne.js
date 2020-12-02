import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SlickSlider from "../../components/slick";
import ImageSlider from "../../components/image-slider";

const FlexibleImageSliderOne = () => {

    // Slider Images
    const sliderImages = [
        "flexible-image-1.jpg",
        "flexible-image-2.jpg",
        "flexible-image-3.jpg"
    ];

    const NextArrow = ({className, onClick})=>{
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-right"/>
            </button>
        );
    };

    const PrevArrow = ({className, onClick})=>{
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-left"/>
            </button>
        );
    };

    const settings = {
        slidesToShow: 1,
        dots: true,
        arrows:true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (
        <div className="flexible-image bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SlickSlider
                            settings={settings}
                            classes="brook-element-carousel flexible-arrow flexible-dots"
                        >
                            {sliderImages.map((sliderImage, key)=>(
                                <ImageSlider key={key} image={sliderImage}/>
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FlexibleImageSliderOne;