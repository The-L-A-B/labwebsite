import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import IconBoxItem from "../../../components/icon-box/IconBoxItemOne";
import iconBoxData from '../../../data/icon-box/IconBoxOne.json';

const IconBoxOne = () => {
    return (
        <div className="brook-icon-boxes-area bg_color--1 mt_sm--50 mt_md--70">
            <Container>
                <Row>
                    {iconBoxData.map(iconbox => (
                        <Col xs={12} md={6} lg={4} key={iconbox.id} className="mt--n130 mt_sm--0 mt_md--0">
                            <IconBoxItem data={iconbox} border={true} padding={true}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default IconBoxOne;