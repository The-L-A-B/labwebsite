import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const AboutMinimalAgency = () => {
    return (
        <div className="brook-about-area bg_image--26 ptb--130 ptb-md--80 ptb-sm--60">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="about-content text-center wow move-up">
                            <h6 className="heading heading-h6 theme-color secondary-font font-bold">ABOUT US</h6>
                            <div className="bk-separator--10"/>
                            <h2 className="heading heading-h2 playfair-font line-height-1-62 font-400">
                                A small design agency based in New <br/> York. We love to find <span className="theme-color">simple solutions</span> to <br/> complex challenges.
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMinimalAgency;
