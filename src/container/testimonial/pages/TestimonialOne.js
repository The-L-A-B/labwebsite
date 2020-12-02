import React from 'react';
import Wave from 'react-wavify'
import {Col, Container, Row} from "react-bootstrap";
import TestimonialItem from "../../../components/testimonial/TestimonialItemOne";
import testimonials from '../../../data/testimonial';

const TestimonialOne = () => {
    return (
        <div className="brook-testimonial-area position-relative ptb--200 ptb-md--80 ptb-sm--60">
            <div className="wavify-wrapper">
                <Wave
                    className={'wavify-item'}
                    fill='#f5f5f5'
                    paused={false}
                    options={{
                        height: 140,
                        amplitude: 80,
                        points: 4
                    }}
                />
                <Wave
                    className={'wavify-item'}
                    fill='#f4f4f4'
                    paused={false}
                    options={{
                        height: 140,
                        amplitude: 80,
                        speed: 0.3,
                        points: 3
                    }}
                />
            </div>
            <Container>
                <Row>
                    <Col lg={4} className={'text-center ptb-md--80 ptb-sm--80'}>
                        <div className="brook-section-title text-left title-max-width plr_sm--50">
                            <h3 className="heading heading-h3">Feedbacks <br/>from our<br/> clients.</h3>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <Row className="mt--n30">
                            {testimonials.slice(0, 4).map(testimonial => (
                                <Col key={testimonial.id} md={6} className="mt--30">
                                    <TestimonialItem
                                        data={testimonial}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TestimonialOne;
