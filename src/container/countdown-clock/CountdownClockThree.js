import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Countdown from "react-countdown";
import Renderer from "../../components/countdown-clock/CountdownRender";

const CountdownClockThree = () => {
    return (
        <div className="brook-countdown-area pb--100 pb_md--80 pb_sm--80 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="box-timer countdown-style-2 font-lg-size">
                            <div className="countbox timer-grid justify-content-center">
                                <Countdown date={'2021-04-15'} renderer={Renderer}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountdownClockThree;