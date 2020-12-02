import React from 'react';
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap'

const TabTwo = () => {
    return (
        <div className="tabs-section section pb--120 pb-md--80 pb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3 className="mb--30">Vertical Tabs</h3>
                        <div className="tab vertical d-flex flex-wrap">
                            <Tab.Container id="pills-tab" defaultActiveKey="first">
                                <Nav variant="pills" className="flex-md-column tab-nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Vertical Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Vertical Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Vertical Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p className="mb-0">Culpa dolor voluptate do laboris laboris irure reprehenderit
                                            id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu
                                            veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum
                                            velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit.
                                            Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore
                                            ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur
                                            qui.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p className="mb-0">Ullamco mollit occaecat Culpa dolor voluptate do laboris
                                            laboris irure reprehenderit
                                            id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu
                                            veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum
                                            velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit.
                                            Ut et elit aliquip labore Lorem enim eu.dolore ipsum id officia mollit qui
                                            esse anim eiusmod do sint minim consectetur qui.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p className="mb-0">Consectetur adipisicing Culpa dolor voluptate do laboris
                                            laboris irure reprehenderit id incididunt duis pariatur mollit aute magna
                                            pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim
                                            in quis laboris ipsum velit id veniam. Quis ut officia excepteur non sit. Ut
                                            et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum
                                            id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TabTwo;
