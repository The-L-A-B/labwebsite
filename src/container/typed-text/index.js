 import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import TypedText from '../../components/typed-text';

const TypedTextContainer = () => {
    return (
        <div className="bk-typed-text-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col lg={2}>
                        <div className="brook-section-title">
                            <h6 className="heading heading-h6 theme-color">Typed Text</h6>
                        </div>
                    </Col>

                    <Col lg={10}>
                        <div className="typed-text">
                            <div className="content">
                                <h3 className="heading heading-h3 cd-headline clip is-full-width">We are a creative
                                    studio focused on
                                    <span className={'theme-color'}> <TypedText
                                            content={['graphic', 'interactive', 'web']}
                                            typeSpeed={50}
                                            backSpeed={50}
                                            loop={true}
                                        /> </span>
                                    design</h3>

                                <p className="bk_pra">We combine classic brand strategy and account
                                    planning to find a brand’s true capability. Then we turn this capability into
                                    content, products, services and campaigns – creating and defining experiences
                                    that users love.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className={'pt--120 pt-md--80 pt-sm--60'}>
                    <Col lg={2}>
                        <div className="brook-section-title">
                            <h6 className="heading heading-h6 theme-color">Typed Text 02</h6>
                        </div>
                    </Col>

                    <Col lg={10}>
                        <div className="typed-text">
                            <div className="content">
                                <h3 className="heading heading-h3 cd-headline clip is-full-width">We are a creative
                                    studio focused on
                                    <span className={'theme-color text-variation-play'}> <TypedText
                                            content={['graphic', 'interactive', 'web']}
                                            typeSpeed={50}
                                            backSpeed={50}
                                            loop={true}
                                        /> </span>
                                    design</h3>

                                <p className="bk_pra">We combine classic brand strategy and account
                                    planning to find a brand’s true capability. Then we turn this capability into
                                    content, products, services and campaigns – creating and defining experiences
                                    that users love.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TypedTextContainer;
