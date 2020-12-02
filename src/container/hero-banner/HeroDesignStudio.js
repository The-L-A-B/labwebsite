import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import heroBannerBg from "../../assets/img/revolution/slider-design-studio-slide-01-bg.jpg";
import gradientBg from "../../assets/img/revolution/slider-home-design-studio-slide-01-image-01.jpg";
import mouseIcon from "../../assets/img/revolution/mouse-icon.png";

const HeroDesignStudio = () => {
    return (
        <div className="hero-banner-wrapper design-studio" style={{backgroundImage: `url(${heroBannerBg})`}}>
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <div className="hero-banner-content hero-banner-content--design-studio">
                            <h2>websites <span className="playfair-font red-color">&</span> digital platforms.</h2>
                            <p>Insights from the world’s top design leaders.</p>
                        </div>
                    </Col>
                </Row>

                <div className="hero-content-right" style={{backgroundImage: `url(${gradientBg})`}}>
                    <div className="hero-right">
                        <h3>check out our works.</h3>
                        <a href="/portfolio" className="brook-btn bk-btn-white btn-sd-size btn-rounded">
                            Check Portfolio
                        </a>
                    </div>
                </div>
            </Container>

            <a href="/" className="mouse-icon">
                Scroll for more
                <img src={mouseIcon} alt="mouse icon"/>
            </a>
        </div>
    );
};

export default HeroDesignStudio;
