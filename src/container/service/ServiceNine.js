import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import iconBoxData from "../../data/icon-box/IconBoxOne.json";
import IconBoxItem from "../../components/icon-box/IconBoxItemOne";
import Thumbnail from "../../components/about-us/thumbnail/AboutThumbOne";
import thumb from "../../assets/img/service/modern/service-1.jpg"

const ServiceNine = () => {
    return (
        <div className="brook-service-modern-wrapper">
            <div className="brook-service-modern-top ptb--150 ptb-md--80 ptb-sm--60 bg_color--1">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="modern-service">
                                <h3 className="heading heading-h3 line-height-1-42 wow move-up">
                                    A creative agency specialized brand strategy & digital creation.
                                </h3>
                            </div>
                        </Col>

                        <Col lg={{span: 7, offset: 1}} className="mt_md--30 mt_sm--30">
                            <div className="modern-service wow move-up">
                                <h5 className="heading heading-h5">Creative services</h5>
                                <div className="bk-separator--20"/>
                                <h5 className="heading heading-h5 body-color line-height-1-62">
                                    Brook presents your services with flexible, convenient and multipurpose layouts.
                                </h5>
                                <div className="bk-separator--20"/>
                                <p className="bk_pra">I focus on creating creative, original, and conceptual works for
                                    editorial illustrations, magazines, covers, and brands as well as online visual
                                    organizations. Through constant learning and improving, my works excel in
                                    designing.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="brook-service-modern-bottom">
                <Container fluid>
                    <Row>
                        <Col lg={7} className="pl--350 plr_lg--30 plr_md--50 plr_sm--50">
                            <Row>
                                {services.map(service => (
                                    <Col sm={6} key={service.id} className="wow move-up">
                                        <IconBoxItem
                                            data={service}
                                            border={false}
                                            padding={false}
                                            className="mt--70 mt_lg--20 mt_mobile--40"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        <Col lg={5} className="mt_md--40 mt_sm--40">
                            <Thumbnail thumb={thumb}/>
                        </Col>
                    </Row>
                </Container>
            </div>
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
    }
]

export default ServiceNine;
