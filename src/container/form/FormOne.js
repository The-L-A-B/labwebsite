import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactFormOne from "../../components/forms/ContactFormOne";
import ContactFormTwo from "../../components/forms/ContactFormTwo";

const FormOne = () => {
    return (
        <div className="brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <ContactFormOne/>
                    </Col>

                    <Col xs={12} lg={6} className="mt_sm--50 mt_md--80">
                        <ContactFormTwo/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormOne;
