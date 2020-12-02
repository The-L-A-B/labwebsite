import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GradationItem from "../../components/gradation";

const GradationTwo = () => {
    return (
        <div className="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="brook-section-title text-center">
                            <h4 className="heading heading-h4">Custom color</h4>
                        </div>

                        <div className="bk-gradation mt--60 mt_sm--5">
                            <GradationItem
                                count={1}
                                heading={'Brainstorming'}
                                content={"Study the problem and general materials to find out creative concepts."}
                                color={'#f55d4e'}
                            />

                            <GradationItem
                                count={2}
                                heading={'Approaching'}
                                content={"Quickly translate the visions into reality and patent possible approaches."}
                                color={'#9013fe'}
                            />

                            <GradationItem
                                count={3}
                                heading={'Adjusting'}
                                content={"Release approaches out into the world, submit it to criticism & adaptation."}
                                color={'#7ed321'}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GradationTwo;
