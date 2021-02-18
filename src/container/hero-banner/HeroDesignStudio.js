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
                            <h2>The Life After Bootcamp</h2>
														<h2>(L.A.B)</h2>
                            <p>What do we do next?</p>
                        </div>
                    </Col>
                </Row>

                <div className="hero-content-right" style={{backgroundColor: '#233D4D'}}>
                    <div className="hero-right">
                        <h3>check out what we're about.</h3>
                        <a href="/portfolio" className="brook-btn bk-btn-orange btn-sd-size btn-rounded">
                            About Us
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
