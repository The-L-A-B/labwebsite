import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "../../components/forms/ContactFormOne";

const ContactFive = () => {
    return (
        <div className="brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="brook-section-title text-center mb--40">
                            <h4 className="heading heading-h4">Send us a message</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} className="mx-auto">
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactFive;
