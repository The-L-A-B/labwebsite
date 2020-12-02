import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Countdown from 'react-countdown';
import Renderer from "../../components/countdown-clock/CountdownRender";

const CountdownClockTwo = () => {
    return (
        <div className="brook-countdown-area pb--100 pb_md--80 pb_sm--80 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="box-timer countdown-style-1 bg-solid-grey">
                            <div className="count box timer-grid justify-content-center">
                                <Countdown date={'2021-04-15'} renderer={Renderer}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountdownClockTwo;