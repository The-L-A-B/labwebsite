import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Parallax, {Layer} from "react-parallax-scroll";
import Input from "../../components/input";

const ContactTwo = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Parallax>
            <Layer className="bg_image--23" settings={{speed: -0.2, type: 'backgroundY'}}>
                <div className="brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60">
                    <Container>
                        <Row>
                            <Col lg={6} className="wow move-up">
                                <div className="contact-form contact-form--5">
                                    <div className="brook-title mb--30 text-center">
                                        <h2 className="heading heading-h2">Contact Us</h2>
                                        <div className="bk-separator--20"/>
                                        <p className="bk_pra">For each project we establish relationships with
                                            partners.</p>
                                    </div>

                                    <form action="/" onSubmit={(e) => handleFormSubmit(e)}>
                                        <Row>
                                            <Col lg={6}>
                                                <Input
                                                    type="text"
                                                    placeholder="Name *"
                                                    required={true}
                                                />
                                            </Col>

                                            <Col lg={6}>
                                                <Input
                                                    type="email"
                                                    placeholder="Email *"
                                                    required={true}
                                                />
                                            </Col>

                                            <Col lg={12} className="mt--30">
                                                <Input
                                                    type="text"
                                                    placeholder="Phone Number"
                                                />
                                            </Col>

                                            <Col lg={12} className="mt--30">
                                                <Input
                                                    type="textarea"
                                                    placeholder="Your message"
                                                    required={true}
                                                />
                                            </Col>

                                            <Col lg={12} className="mt--30 text-center">
                                                <div className="brook-btn">
                                                    <button
                                                        className="brook-btn bk-btn-yellow text-dark btn-sd-size btn-rounded">Send
                                                        message
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layer>
        </Parallax>
    );
};

export default ContactTwo;
