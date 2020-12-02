import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import IconListItem from "../icon-list/IconListItemTwo";

const BreadcrumbFour = () => {
    return (
        <div
            className="brook-breadcrumb-area bg_image--12 fullscreen breadcrumb-title-bar breadcrumb-title-white d-flex align-items-center pt_md--70 pt_sm--100 pb_sm--50 position-relative">
            <div className="overlay" style={{backgroundColor: "#000", opacity: 0.6}}/>
            <Container fluid={true} className="plr--180 plr_lg--100 plr_md--50 plr_sm--50">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="breadcrumb-inner text-left">
                            <h1 className="heading heading-h1 font-60 text-white">
                                We design & build <br/> brands and digital projects <br/> for businesses.
                            </h1>
                        </div>
                    </Col>

                    <Col lg={6} className="mt_md--30 mt_sm--30">
                        <Row className="mt--n50">
                            {content.map(item => (
                                <Col xl={6} className="mt--50">
                                    <IconListItem data={item}/>
                                </Col>
                            ))}
                        </Row>
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

export default BreadcrumbFour;
