import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NewsletterFormOne from "../../components/forms/NewsletterFormOne";
import NewsletterFromTwo from "../../components/forms/NewsletterFormTwo";
import NewsletterFormThree from "../../components/forms/NewsletterFormThree";

const FormTwo = () => {
    return (
        <div className="brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--4">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="contact-form bg_color--1 contact-form--2">
                            <h4 className="heading heading-h4">Newsletter sign-up</h4>
                            <NewsletterFormOne/>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="pl--140 pl_md--40 pl_sm--5 mt_sm--40">
                        <div className="contact-form bg_color--2 contact-form--3">
                            <h4 className="heading heading-h4 text-white">Newsletter sign-up</h4>
                            <NewsletterFromTwo/>
                        </div>

                        <div className="contact-form mt--60 contact-form--4">
                            <h4 className="heading heading-h4 text-white">Newsletter sign-up</h4>
                            <NewsletterFormThree/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormTwo;
