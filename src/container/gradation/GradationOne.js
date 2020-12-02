import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GradationItem from "../../components/gradation";

const GradationOne = () => {
    return (
        <div className="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="brook-section-title text-center">
                            <h4 className="heading heading-h4">Default color</h4>
                        </div>

                        <div className="bk-gradation mt--60 mt_sm--5">
                            <GradationItem
                                count={1}
                                heading={'Brainstorming'}
                                content={"Study the problem and general materials to find out creative concepts."}
                                color={'#0038E3'}
                            />

                            <GradationItem
                                count={2}
                                heading={'Approaching'}
                                content={"Quickly translate the visions into reality and patent possible approaches."}
                                color={'#0038E3'}
                            />

                            <GradationItem
                                count={3}
                                heading={'Adjusting'}
                                content={"Release approaches out into the world, submit it to criticism & adaptation."}
                                color={'#0038E3'}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GradationOne;
