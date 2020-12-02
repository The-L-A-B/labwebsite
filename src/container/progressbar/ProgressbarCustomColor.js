import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ProgressbarLine from "../../components/progressbar/ProgressbarLine";

const ProgressbarCustomColor = () => {
    return (
        <div className="brook-progress-charts-area pb--120 pb-md--80 pb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12} md={9} lg={6} className="m-auto">
                        <div className="progress-wrapper">
                            <h3 className="heading">Custom color</h3>

                            <ProgressbarLine title="UI/UX" bgColor="#7ed321" percentage={'90%'}/>
                            <ProgressbarLine title="IDEAS" bgColor="#f2b636" percentage={'80%'}/>
                            <ProgressbarLine title="MARKETING" bgColor="#f55d4e" percentage={'70%'}/>
                            <ProgressbarLine title="CONSULTING" bgColor="#000000" percentage={'60%'}/>
                            <ProgressbarLine title="DEVELOPING" bgColor="#0038E3" percentage={'50%'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProgressbarCustomColor;