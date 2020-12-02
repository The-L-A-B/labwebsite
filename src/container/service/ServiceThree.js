import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SlickSlider from "../../components/slick";
import ServiceItemTwo from "../../components/service/ServiceItemTwo";
import servicesData from "../../data/service/ServiceDigitalAgency.json";

const ServiceThree = () => {

    const NextArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-right"/>
            </button>
        );
    };

    const PrevArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-left"/>
            </button>
        );
    };

    const settings = {
        slidesToShow: 3,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                "breakpoint": 801,
                "settings": {
                    slidesToShow: 2
                }
            },
            {
                "breakpoint": 577,
                "settings": {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="bk-about-area pt--150 pb--70 pt_md--80 pt_sm--60 pb_md--80 pb_sm--80 bg_color--1 bg-svg--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="brook-section-title text-center">
                            <h2 className="heading heading-h2 heading-font">We're always ready for challenges.</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="mt--80">
                        <SlickSlider
                            settings={settings}
                            classes="brook-element-carousel slick-arrow-center arrow-transparent slick-gutter-15 wow move-up"
                        >
                            {servicesData.map(service => (
                                <ServiceItemTwo
                                    key={service.id}
                                    data={service}
                                />
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceThree;
