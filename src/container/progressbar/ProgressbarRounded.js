import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProgressbarCircle from "../../components/progressbar/ProgressbarCircle";

const ProgressbarRounded = () => {
    return (
        <div className="brook-progress-charts-area pb--120 pb-md--80 pb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="progress-circle-wrap justify-content-center">
                            <ProgressbarCircle percentage={70} bgColor={'#222222'}/>
                            <ProgressbarCircle percentage={90} bgColor={'#0038E3'}/>
                            <ProgressbarCircle percentage={85} bgColor={'#f2b636'}/>
                            <ProgressbarCircle percentage={65} bgColor={'#7ed321'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProgressbarRounded;