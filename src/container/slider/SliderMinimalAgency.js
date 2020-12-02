import React from 'react';
import {Container, Col} from "react-bootstrap";
import SliderSwiper from "../../components/swiper";
import {heroSliderConfig} from "../../helper/heroSliderConfig";
import sliderData from "../../data/slider/SliderMinimalAgency.json";

const SliderMinimalAgency = () => {

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
        <div className="hero-slider hero-slider--minimal-agency">
            <SliderSwiper settings={settings}>
                {sliderData.map(slide => (
                    <div className="swiper-slide" key={slide.id}>
                        <div className="slide-inner">
                            <Container fluid className="h-100">
                                <Col lg={12} className="h-100">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-img">
                                            <img src={require('../../assets/img/revolution/' + slide.bgImg)} alt={slide.heading}/>
                                        </div>

                                        <div data-swiper-parallax="400" className="slide-title">
                                            <h4>{slide.title}</h4>
                                            <h2>{slide.heading}</h2>
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

export default SliderMinimalAgency;
