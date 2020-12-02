import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import testimonialData from "../../../data/testimonial";
import TestimonialItemOne from "../../../components/testimonial/TestimonialItemOne";

const TestimonialTwo = () => {
    return (
        <div className="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5 poss_relative">
            <Container>
                <Row className="mt--n30">
                    {testimonialData.map(testimonial => (
                        <Col md={6} lg={4} key={testimonial.id}>
                            <TestimonialItemOne
                                data={testimonial}
                                classes={"mt--30"}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className="vc_row-separator triangle triangle--top top">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0.156661 0.1">
                    <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "/>
                </svg>
            </div>

            <div className="more-testimonials-btn text-center mt--50 wow move-up">
                <a className="more-details-btn font-16" href={`${process.env.PUBLIC_URL + '/'}`}>
                    More testimonials
                    <i className="fa fa-arrow-right"/>
                </a>
            </div>
        </div>
    );
};

export default TestimonialTwo;
