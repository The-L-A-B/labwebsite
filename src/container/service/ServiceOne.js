import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import IconBoxItem from "../../components/icon-box/IconBoxItemOne";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import services from "../../data/icon-box/IconBoxOne.json";

const ServiceOne = () => {
    return (
        <div className="bk-service-area section-ptb-xl bg_image--2">
            <Container>
                <Row>
                    <Col xs={12}>
                        <Col xs={12}>
                            <SectionTitleTwo
                                title={"WHAT WE DO"}
                                heading={"We design & build brands, campaigns & digital projects for businesses large & small."}
                                center={true}
                            />
                        </Col>
                    </Col>
                </Row>

                <Row className="mt--70 mt_sm--20 mt_md--30">
                    {services.map(service => (
                        <Col xs={12} md={6} lg={4} key={service.id}>
                            <IconBoxItem
                                data={service}
                                border={true}
                                padding={true}
                                showBtn={true}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServiceOne;
