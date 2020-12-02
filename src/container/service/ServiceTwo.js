import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ServiceItemOne from "../../components/service/ServiceItemOne";
import services from "../../data/service/ServiceCreativeAgency.json";

const ServiceTwo = () => {
    return (
        <div className="bk-service-area section-pb-120">
            <Container>
                <Row>
                    {services.map(service => (
                        <Col key={service.id} xs={12} md={4} className={"wow move-up"}>
                            <ServiceItemOne
                                data={service}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServiceTwo;
