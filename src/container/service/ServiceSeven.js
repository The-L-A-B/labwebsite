import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GradationItem from "../../components/gradation";

const ServiceSeven = () => {
    return (
        <div className="brook-gradation-area pb--150 pb-md--80 pb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-center">
                            <h5 className="heading heading-h5 theme-color">How We Do</h5>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3">Creative Procedure</h3>
                        </div>

                        <div className="bk-gradation mt--30 mt_sm--5">
                            {contents.map(content => (
                                <GradationItem
                                    key={content.id}
                                    count={content.id}
                                    heading={content.heading}
                                    content={content.text}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const contents = [
    {
        id: 1,
        heading: "Brainstorming",
        text: "Study the problem and general materials to find out creative concepts."
    },
    {
        id: 2,
        heading: "Approaching",
        text: "Quickly translate the visions into reality and patent possible approaches."
    },
    {
        id: 3,
        heading: "Adjusting",
        text: "Release approaches out into the world, submit it to criticism & adaptation."
    }
]

export default ServiceSeven;
