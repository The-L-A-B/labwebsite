import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ListItem from "../../components/list";
import listContent from '../../data/list';

const ListElement = () => {
    return (
        <div className={"brook-list-wrapper ptb--150 ptb-md--80 ptb-sm--60  bg_color--1"}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="bk-list">
                            <ListItem
                                marker={'default'}
                                text={'Modern Design'}
                                content={"You can select your favorite layouts & elements for particular projects with unlimited customization possibilities."}
                            />
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="bk-list">
                            <ListItem
                                marker={'default'}
                                text={'Unique ideas'}
                                content={"You can select your favorite layouts & elements for particular projects with unlimited customization possibilities."}
                            />
                        </div>
                    </Col>
                </Row>

                <Row className={"pt--120 pt-md--80 pt-sm--60"}>
                    <Col md={6} lg={3}>
                        <div className="bk-list--2">
                            {listContent.map(item=>(
                                <ListItem
                                    key={item.id}
                                    marker={'dot'}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className="bk-list--2">
                            {listContent.map(item=>(
                                <ListItem
                                    key={item.id}
                                    marker={'check'}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className="bk-list--2">
                            {listContent.map(item=>(
                                <ListItem
                                    key={item.id}
                                    marker={'number'}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className="bk-list--2">
                            {listContent.map(item=>(
                                <ListItem
                                    key={item.id}
                                    marker={'number theme'}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListElement;
