import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const CallToActionTwo = ({bgColor, bgImage}) => {
    return (
        <div className="brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60"
             style={{backgroundColor: bgColor, backgroundImage: `url(${bgImage})`}}
        >
            <Container>
                <Row className="align-items-center text-center">
                    <Col xs={12}>
                        <div className="call-content vertical-call-to-action text-center">
                            <h3 className="heading heading-h3">Start working together?</h3>
                            <div className="spacing"/>
                            <div className="call-btn text-center">
                                <a className="brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded"
                                   href={`${process.env.PUBLIC_URL + "/"}`}>
                                    Find out more
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToActionTwo;