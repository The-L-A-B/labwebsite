import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import testimonialData from '../../../data/testimonial';
import TestimonialItemOne from "../../../components/testimonial/TestimonialItemOne";

const TestimonialTwo = () => {
    return (
        <div className="brook-testimonial-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--6">
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
        </div>
    );
};

export default TestimonialTwo;