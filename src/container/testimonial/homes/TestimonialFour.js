import React from 'react';
import {Col, Row} from "react-bootstrap";
import SlickSlider from "../../../components/slick";
import Testimonial from "../../../components/testimonial/TestimonialItemFour";
import testimonials from "../../../data/testimonial";

const TestimonialFour = () => {

    const settings = {
        spaceBetween: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false
    }

    return (
        <div className="brook-testimonial-area bg_color--11">
            <Row className="row--0">
                <Col lg={7} xl={6} className="bg-architecture--1">
                    <div className="testimonial-wrapper plr--180 plr_lg--50 plr_md--50 plr_sm--20">
                        <div className="bk-separator--120"/>
                        <div className="testimonial-activation">
                            <SlickSlider
                                classes="brook-element-carousel slick-arrow-center slick-dots-bottom"
                                settings={settings}
                            >
                                {testimonials.map(testimonial => (
                                    <Testimonial key={testimonial.id} data={testimonial}/>
                                ))}
                            </SlickSlider>
                        </div>
                        <div className="bk-separator--120"/>
                    </div>
                </Col>

                <Col lg={5} xl={6} className="bg-architecture--2 ptb-md--150 ptb-sm--150"/>
            </Row>
        </div>
    );
};

export default TestimonialFour;
