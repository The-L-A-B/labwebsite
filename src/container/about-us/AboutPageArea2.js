import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import IconListItem from "../../components/icon-list/IconListItemOne";
import Thumbnail from "../../components/about-us/thumbnail/AboutThumbOne";
import thumb from "../../assets/img/about/iphone-01.png";

const AboutPageArea2 = () => {
    return (
        <div className="brook-feature-area ptb--150 ptb_md--80 ptb_sm--60 bg_color--1">
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="brook-section-title mb--10">
                            <h3 className="heading heading-h3">Features you will love</h3>
                        </div>

                        <Row>
                            {content.map(item => (
                                <Col md={6} className="mt--50" key={item.id}>
                                    <IconListItem data={item}/>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col lg={3} className="mt_md--50 mt_sm--50">
                        <Thumbnail thumb={thumb}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const content = [
    {
        id: 1,
        iconClass: "ion-ios-infinite",
        title: "Digital marketing",
        content: "We conduct the marketing of products & services using latest digital technologies."
    },
    {
        id: 2,
        iconClass: "ion-monitor",
        title: "UI/UX designs",
        content: "We conduct the marketing of products & services using latest digital technologies."
    },
    {
        id: 3,
        iconClass: "ion-ios-baseball-outline",
        title: "SEO marketing",
        content: "We conduct the marketing of products & services using latest digital technologies."
    },
    {
        id: 4,
        iconClass: "ion-pinpoint",
        title: "Resource use",
        content: "We conduct the marketing of products & services using latest digital technologies."
    }
]

export default AboutPageArea2;
