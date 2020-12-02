import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import services from "../../data/service/ServiceArchitecture.json"
import ServiceItem from "../../components/service/ServiceItemThree";

const ServiceFive = () => {

    useEffect(() => {
        const architectureServices = document.querySelectorAll('.architecture-service');
        const serviceContainer = document.querySelector('.architecture-service-container');
        serviceContainer.style.backgroundImage = `url(${require('../../assets/img/slider/type/' + services[0].thumb)})`;
        architectureServices.forEach((service, indx) => {
            service.addEventListener('mouseenter', () => {
                let thumb = require('../../assets/img/slider/type/' + services[indx].thumb);
                serviceContainer.style.backgroundImage = `url(${thumb})`
            })
        })
    }, [])

    return (
        <div className="brook-service-area architecture-service-container">
            <Row>
                {
                    services.map(service => (
                        <Col sm={6} lg={3} key={service.id}>
                            <ServiceItem data={service}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default ServiceFive;
