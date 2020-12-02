import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import SlickSlider from "../../../components/slick";
import testimonialData from '../../../data/testimonial';
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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        dots: false,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 756,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <div className="brook-testimonial-area bg_image--18">
            <Row className="row--0 align-items-center">
                <Col lg={4} className="ptb-md--80 ptb-sm--80">
                    <SectionTitle
                        heading={`What <br>people say<br> about us`}
                        headingColor={'#fff'}
                        wrapperClass={'d-flex justify-content-center'}
                    />
                </Col>

                <Col lg={8}>
                    <SlickSlider
                        settings={settings}
                        classes="brook-element-carousel slick-arrow-center slick-arrow-triangle slick-arrow-trianglestyle-2 testimonial-space-right testimonial-color-variation testimonial-bg-red"
                    >
                        {testimonialData.map(testimonial => (
                            <TestimonialItemOne
                                key={testimonial.id}
                                data={testimonial}
                                classes={"hover-transparent space-large--topbottom bg-dark"}
                            />
                        ))}
                    </SlickSlider>
                </Col>
            </Row>
        </div>
    );
};

export default TestimonialThree;