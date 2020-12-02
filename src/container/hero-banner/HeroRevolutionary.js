import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const HeroRevolutionary = () => {
    return (
        <div className="revolution-slider-area slider-bg-1 slider-bg-2 slideBg">
            <div className="revolution-slider slider-bg-2">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="inner pt--290 pb--170 text-center">
                                <h5 className="heading heading-h5 text-white">WE WORK HARD, WE PLAY HARD</h5>
                                <div className="bk-separator--15"/>
                                <h1 className="heading heading-h1 text-white font-120">explore creative <br/> minds</h1>
                                <div className="slider-btn">
                                    <a href={`${process.env.PUBLIC_URl + '/'}`}>Explore Now</a>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="basic-modern-dots white-dots">
                                    <div className="dot first-circle"/>
                                    <div className="dot second-circle"/>
                                    <div className="dot third-circle"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HeroRevolutionary;
