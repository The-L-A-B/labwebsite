import React from 'react';
import {Container, Col} from "react-bootstrap";
import Button from "../../components/button";
import SliderSwiper from "../../components/swiper";
import {heroSliderConfig} from "../../helper/heroSliderConfig";
import sliderData from "../../data/slider/SliderDigitalAgency.json";

const SliderDigitalAgency = () => {

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
        <div className="hero-slider hero-slider--digital-agency">
            <SliderSwiper settings={settings}>
                {sliderData.map(slide => (
                    <div className="swiper-slide" key={slide.id}>
                        <div
                            className="slide-inner slide-bg-image"
                            style={{backgroundImage: `url(${require('../../assets/img/revolution/' + slide.bgImg)})`}}
                        >
                            <Container fluid>
                                <Col lg={8} className="mx-auto text-center">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>{slide.heading}</h2>

                                            <Button
                                                type="link"
                                                btnLink={slide.btnLink}
                                                btnText={slide.btnText}
                                                btnStyle="rounded"
                                                size="sd"
                                                color="theme"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Container>
                        </div>
                    </div>
                ))}
            </SliderSwiper>
        </div>
    );
};


export default SliderDigitalAgency;
