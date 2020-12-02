import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const AboutRevolutionary = () => {
    return (
        <div className="brook-about-area pt--130 pt_md--80 pt_sm--60 bg-shape">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="about-content text-center max-width--990">
                            <h6 className="heading heading-h6 font-bold text-white letter-spacing-3">ABOUT US</h6>
                            <div className="bk-separator--10"/>
                            <h3 className="heading heading-h3 line-height-1-62 text-white font-40">
                                Brook is a multi-purpose WordPress theme for big and small-sized businesses working in
                                <span className="theme-color"> creative and original</span> industries.
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutRevolutionary;
