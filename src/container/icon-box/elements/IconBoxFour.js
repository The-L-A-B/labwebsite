 import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import IconBoxItemOne from "../../../components/icon-box/IconBoxItemOne";
import iconBoxData from '../../../data/icon-box/IconBoxOne.json';

const IconBoxFour = () => {
    return (
        <div className="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--5">
            <Container>
                <Row className="mt--n30">
                    {iconBoxData.map(iconbox => (
                        <Col xs={12} md={6} lg={4} key={iconbox.id}>
                            <IconBoxItemOne data={iconbox} border={false} padding={true} showBtn={true}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default IconBoxFour;