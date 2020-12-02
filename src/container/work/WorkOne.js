import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ListItem from "../../components/list";

const WorkOne = () => {
    return (
        <div className="brook-what-do-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-left">
                            <h5 className="heading heading-h5 theme-color">What we do</h5>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3">Effective solution for every businesses</h3>
                        </div>
                    </Col>
                </Row>

                <Row className="mt--40 mt_md--20 mt_sm--5 bk-list">
                    <Col lg={2}>
                        <div className="what-do mt--40 mt_md--5 mt_sm--5">
                            <div className="basic-separator line-3"/>
                        </div>
                    </Col>

                    <Col xl={4} lg={5} md={6}>
                        <div className="what-do mt--40">
                            <ListItem
                                marker={null}
                                text={'Modern Design'}
                                content={"You can select your favorite layouts & elements for particular projects with unlimited admin customization possibilities."}
                            />
                        </div>
                    </Col>

                    <Col xl={{span: 4, offset:1}} lg={5} md={6}>
                        <div className="what-do mt--40">
                            <ListItem
                                marker={null}
                                text={'Unique Design'}
                                content={"You can select your favorite layouts & elements for particular projects with unlimited admin customization possibilities."}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkOne;
