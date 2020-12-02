import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ProgressbarLine from "../../components/progressbar/ProgressbarLine";

const ProgressbarPrimaryColor = () => {
    return (
        <div className="brook-progress-charts-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12} md={9} lg={6} className="m-auto">
                        <div className="progress-wrapper">
                            <h3 className="heading">Primary color</h3>

                            <ProgressbarLine title="UI/UX" bgColor="#0038E3" percentage={'50%'}/>
                            <ProgressbarLine title="IDEAS" bgColor="#0038E3" percentage={'60%'}/>
                            <ProgressbarLine title="MARKETING" bgColor="#0038E3" percentage={'70%'}/>
                            <ProgressbarLine title="CONSULTING" bgColor="#0038E3" percentage={'80%'}/>
                            <ProgressbarLine title="DEVELOPING" bgColor="#0038E3" percentage={'90%'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProgressbarPrimaryColor;