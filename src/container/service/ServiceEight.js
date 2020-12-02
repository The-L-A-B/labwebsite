import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import iconBoxData from "../../data/icon-box/IconBoxOne.json";
import IconBoxItem from "../../components/icon-box/IconBoxItemOne";

const ServiceEight = () => {
    return (
        <div className="brook-icon-boxes-area basic-thine-line pb--200 pb_md--80 pb_sm--80">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Row className="bg_color--1 pt--30 space_dec--110 basic-thick-line-theme-4">
                            {services.map(service => (
                                <Col sm={6} lg={4} key={service.id} className="wow move-up">
                                    <IconBoxItem
                                        data={service}
                                        border={false}
                                        padding={false}
                                        className="mt--70"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const services = [
    ...iconBoxData,
    {
        id: 4,
        title: "Resource use",
        content: "Brook embraces a modern look with various enhanced pre-defined page elements.",
        iconClass: "ion-ios-bell-outline",
        btnText: "More Details",
        btnLink: "/"
    },
    {
        id: 5,
        title: "Multi-purpose use",
        content: "Brook is highly responsive thanks to built-in WPBakery Page Builder & Slider Revolution.",
        iconClass: "ion-ios-infinite-outline",
        btnText: "More Details",
        btnLink: "/"
    },
    {
        id: 6,
        title: "Responsive Layouts",
        content: "Brook embraces a modern look with various enhanced pre-defined page elements.",
        iconClass: "ion-ios-cloudy-outline                                                                                                                                                                                              ",
        btnText: "More Details",
        btnLink: "/"
    }
]

export default ServiceEight;
