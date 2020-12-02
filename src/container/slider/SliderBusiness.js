import React from 'react';
import {Container} from "react-bootstrap";
import SliderSwiper from "../../components/swiper";
import {heroSliderConfig} from "../../helper/heroSliderConfig";
import PopupVideo from "../../components/popup-video";
import sliderData from "../../data/slider/SliderBusiness.json";
import mouseIcon from "../../assets/img/revolution/mouse-icon.png"

const SliderBusiness = () => {

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
        <div className="hero-slider hero-slider--business">
            <SliderSwiper settings={settings}>
                {sliderData.map(slide=>(
                    <div className="swiper-slide" key={slide.id}>
                        <div
                            className="slide-inner slide-bg-image"
                            style={{backgroundImage: `url(${require('../../assets/img/revolution/' + slide.bgImg)})`}}
                        >
                            <Container fluid>
                                <div className={`slide-content slide--${slide.id}`}>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2 dangerouslySetInnerHTML={{__html: slide.heading}}/>
                                    </div>
                                </div>
                                <div className="slide-content-bottom d-none d-md-flex">
                                    <a href="/" className="scroll-more" onClick={e => e.preventDefault()}>
                                        <h6>Scroll for more</h6> <img src={mouseIcon} alt="icon"/>
                                    </a>

                                    <PopupVideo
                                        videoId={slide.videoID}
                                        iconStyleClass="third-icon secondary-color"
                                    />
                                </div>
                            </Container>
                        </div>
                    </div>
                ))}
            </SliderSwiper>

        </div>
    );
};


export default SliderBusiness;
