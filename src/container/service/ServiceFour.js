import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitleOne from "../../components/section-title/SectionTitleOne";
import IconBoxItemOne from "../../components/icon-box/IconBoxItemOne";
import services from '../../data/service/ServiceDesignStudio.json';

const ServiceFour = () => {
    return (
        <div id="section-our-services" className="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--80 bg_image--17">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitleOne
                            wrapperClass={'text-center'}
                            heading={"Best services save the world"}
                            separator={true}
                            separatorColor={'red'}
                        />
                    </Col>
                </Row>

                <Row className="mt--40">
                    {services.map(service=>(
                        <Col key={service.id} sm={6} lg={4}>
                            <IconBoxItemOne
                                data={service}
                                iconType={'img'}
                                padding={true}
                                border={false}
                                showBtn={true}
                            />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col xs={12}>
                        <div
                            className="best-service-footer plr--160 plr_md--50 plr_sm--20 plr_lg--50 text-center mt--70">
                            <h6 className="heading heading-h6 font-16 line-height-1-88 font-medium body-color">
                                Since its establishment in 2000, Brook Creative has been focusing on project management &
                                implementation through global cooperation & partners.
                            </h6>
                            <div className="bk-separator--45"/>

                            <div className="brook-btn">
                                <a className="brook-btn bk-btn-red btn-sd-size btn-rounded space-between" href={`${process.env.PUBLIC_URL + '/'}`}>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceFour;
