import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Countdown from "react-countdown";
import Renderer from "../../components/countdown-clock/CountdownRender";

const CountdownClockFour = () => {
        return (
        <div className="brook-countdown-area pb--100 pb_md--80 pb_sm--80 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="time-circles">
                            <Countdown date={'2021-04-15'} renderer={Renderer}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountdownClockFour;