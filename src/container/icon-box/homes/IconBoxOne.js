import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitleTwo from "../../../components/section-title/SectionTitleTwo";
import iconBoxData from "../../../data/icon-box/IconBoxOne.json";
import IconBoxItem from "../../../components/icon-box/IconBoxItemOne";

const IconBoxOne = () => {
    return (
        <div className="brook-icon-boxes-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitleTwo
                            title="REASONS WHY"
                            heading="We're trusted by clients"
                            center={true}
                            className="mb--20"
                        />
                    </Col>
                </Row>

                <Row className="mt--30">
                    {iconBoxData.map(iconbox => (
                        <Col xs={12} md={6} lg={4} key={iconbox.id}>
                            <IconBoxItem
                                data={iconbox}
                                border={false}
                                padding={false}
                                showBtn={false}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default IconBoxOne;
