import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Countdown from 'react-countdown';
import Renderer from "../../components/countdown-clock/CountdownRender";

const CountdownClockOne = () => {
    return (
        <div className="brook-countdown-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="box-timer countdown-style-1 bg-solid-theme">
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

export default CountdownClockOne;