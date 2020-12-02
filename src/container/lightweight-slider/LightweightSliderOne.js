import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SlickSlider from "../../components/slick";
import LightweightSliderItem from "../../components/lightweight-slider";
import SectionTitle from "../../components/section-title/SectionTitleOne";
import sliderContent from '../../data/lightweight-slider';

const LightweightSliderOne = () => {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    }

    return (
        <div
            className="brook-hero-nav-slider-area bg_color--1  pt--120 pt_md--80 pt_sm--80">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            heading="Slider Navigation"
                            separator={true}
                            wrapperClass="text-center"
                        />
                    </Col>
                </Row>
            </Container>

            <SlickSlider
                classes="brook-element-carousel slick-arrow-center slick-arrow-rounded lr-0 mt--40"
                settings={settings}
            >
                {sliderContent.map(item => (
                    <LightweightSliderItem
                        key={item.id}
                        bgImage={item.backgroundImg}
                        title={item.title}
                        heading={item.heading}
                        btnText={item.btnText}
                        btnLink={item.btnLink}
                    />
                ))}

            </SlickSlider>
        </div>
    );
};

export default LightweightSliderOne;
