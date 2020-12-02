import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import SliderSwiper from "../../components/swiper";
import {heroSliderConfig} from "../../helper/heroSliderConfig";
import sliderData from "../../data/slider/SliderArchitecture.json";

const SliderArchitecture = () => {

    const settings = {
        ...heroSliderConfig,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className}">0${index + 1}</span>`
            }
        }
    }

    return (
        <div className="hero-slider hero-slider--architecture">
            <SliderSwiper settings={settings}>
                {sliderData.map(slide => (
                    <div className="swiper-slide" key={slide.id}>
                        <div
                            className="slide-inner slide-bg-image"
                            style={{backgroundImage: `url(${require('../../assets/img/revolution/' + slide.bgImg)})`}}
                        >
                            <Container fluid className="h-100">
                                <Row className="h-100 align-items-center">
                                    <Col lg={{span: 6, offset: 3}} xl={{span: 4, offset: 6}}>
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2 dangerouslySetInnerHTML={{__html: slide.heading}}/>
                                            </div>

                                            <div data-swiper-parallax="450" className="view-more-btn">
                                                <a href={`${process.env.PUBLIC_URL + slide.btnLink}`}>
                                                    <span>{slide.btnText}</span>
                                                    <span className="btn-arrow"/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                ))}
            </SliderSwiper>
        </div>
    );
};


export default SliderArchitecture;
