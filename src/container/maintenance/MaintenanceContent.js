import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Input from "../../components/input";

const MaintenanceContent = () => {
    return (
        <div className="page-template-maintenance fullscreen bg_image--57 d-flex align-items-center">
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="maintenance-wrapper">
                            <div className="inner">
                                <h2> &lt;Undergoing maintenance/&gt; </h2>
                                <div className="maintenance-text">
                                    We sincerely apologize for the inconvenience. <br/> Our
                                    site is currently undergoing maintenance and upgrades, but will return shortly
                                    after.
                                </div>
                                <Form className="maintenance-form">
                                    <Input
                                        type='email'
                                        placeholder="Your e-mail"
                                    />
                                    <Button>Subscribe</Button>
                                </Form>
                                <p className="form-desc"> You can subscribe us to get noticed when our website is ready.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MaintenanceContent;
