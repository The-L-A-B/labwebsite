import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SlickSlider from "../../components/slick";
import LightweightSliderItem from "../../components/lightweight-slider";
import sliderContent from '../../data/lightweight-slider';
import SectionTitle from "../../components/section-title/SectionTitleOne";

const LightweightSliderThree = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    }

    return (
        <div className="brook-hero-number-slider-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            heading="Slider Number"
                            separator={true}
                            wrapperClass="text-center"
                        />
                    </Col>
                </Row>
            </Container>

            <SlickSlider
                classes="brook-element-carousel slick-arrow-center number-dot mt--40"
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

export default LightweightSliderThree;
