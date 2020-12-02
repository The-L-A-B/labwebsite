import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import IconBoxItemOne from "../../../components/icon-box/IconBoxItemOne";
import iconBoxData from '../../../data/icon-box/IconBoxOne.json';

const IconBoxOne = () => {
    return (
        <div className="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container>
                <Row className="mt--n30">
                    {iconBoxData.map(iconbox => (
                        <Col xs={12} md={6} lg={4} key={iconbox.id}>
                            <IconBoxItemOne data={iconbox} border={true} padding={true}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default IconBoxOne;