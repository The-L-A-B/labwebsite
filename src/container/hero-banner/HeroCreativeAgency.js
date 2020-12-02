import React, {useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import PopupVideo from "../../components/popup-video";
import heroBannerBg from "../../assets/img/revolution/slider-creative-agency-slide-01-bg.jpg";
import separator from "../../assets/img/revolution/slider-creative-agency-slide-01-image-01.png";
import mouseIcon from "../../assets/img/revolution/mouse-icon.png";

const HeroCreativeAgency = () => {
    useEffect(() => {
        const heroContent = document.querySelector('.hero-banner-content');
        const animate = heroContent.querySelectorAll('.move-up');
        animate.forEach((elem, index) => {
            elem.classList.add('animated');
        })
    }, [])

    return (
        <div className="hero-banner-wrapper" style={{backgroundImage: `url(${heroBannerBg})`}}>
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="hero-banner-content">
                            <PopupVideo
                                videoId={"7e90gBu4pas"}
                                gradient={true}
                                gradientClass="color-pink"
                            />
                            <h2>Creative <span>Agency</span></h2>
                            <img src={separator} alt="separator"/>
                            <p>Introducing the best practices, stories, and insights from the world’s top design leaders.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <button className="mouse-icon animate">
                <img src={mouseIcon} alt="mouse icon"/>
            </button>
        </div>
    );
};

export default HeroCreativeAgency;
