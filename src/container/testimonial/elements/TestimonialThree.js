import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SlickSlider from "../../../components/slick";
import testimonialData from "../../../data/testimonial";
import TestimonialItemOne from "../../../components/testimonial/TestimonialItemOne";

const TestimonialThree = () => {

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
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    };

    return (
        <div className="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--7 slick-arrow-hover">
            <Container>
                <Row>
                    <Col xs={12} className={'pb--30'}>
                        <SlickSlider
                            settings={settings}
                            classes={'brook-element-carousel slick-arrow-center slick-dots-bottom slick-gutter-15'}
                        >
                            {testimonialData.map(testimonial=>(
                                <TestimonialItemOne
                                    key={testimonial.id}
                                    data={testimonial}
                                />
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TestimonialThree;