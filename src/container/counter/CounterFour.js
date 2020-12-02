import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CounterItem from "../../components/counter/CounterItemOne";

const CounterFour = () => {
    return (
        <div className="brook-counterup-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-center mb--70">
                            <h6 className="heading heading-h6 theme-color">NUMBER SPEAKS</h6>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3">We're always ready for challenges.</h3>
                        </div>
                    </Col>
                </Row>

                <Row className="mt--n40">
                    {content.map(item => (
                        <Col key={item.id} xs={12} sm={6} md={4}>
                            <CounterItem
                                title={item.title}
                                count={item.count}
                                iconClass={item.iconName}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const content = [
    {
        id: 1,
        title: "Satisfied clients",
        count: 2034,
        iconName: "ion-ios-people-outline"
    },
    {
        id: 2,
        title: "Unique Designs",
        count: 3034,
        iconName: "ion-ios-eye-outline"
    },
    {
        id: 3,
        title: "Completed Projects",
        count: 1052,
        iconName: "ion-ios-filing-outline"
    }
]

export default CounterFour;
