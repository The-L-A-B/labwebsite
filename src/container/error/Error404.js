import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Thumbnail from "../../components/about-us/thumbnail/AboutThumbOne";
import errorImg from "../../assets/img/icons/image_404.png";
import Button from "../../components/button";

const Error404 = () => {
    return (
        <div className="error-not-found">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="error-inner text-center">
                            <Thumbnail thumb={errorImg} className="mb--55 image text-center"/>
                            <h3 className="heading heading-h3 text-white">Looks like you are lost.</h3>
                            <div className="error-text mt--20">
                                <p className="text-white">
                                    It looks like nothing was found at this location. You can either go back to the last page or go to homepage.
                                </p>

                                <div className="error-button-group mt--40">
                                    <Button
                                        type="button"
                                        btnText="Go Back"
                                        btnStyle="rounded"
                                        size="sd"
                                        color="theme"
                                        onClick={()=> window.history.back()}
                                    />

                                    <Button
                                        type="link"
                                        btnText="Homepage"
                                        btnLink="/"
                                        btnStyle="rounded"
                                        size="sd"
                                        color="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Error404;
