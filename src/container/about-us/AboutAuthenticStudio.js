import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutThumb from "../../components/about-us/thumbnail/AboutThumbOne";
import thumb from '../../assets/img/about/home-authentic-studio-image-01.jpg'

const AboutAuthenticStudio = () => {
    return (
        <div className="brook-about-area bg_color--1 ptb--120 ptb-md--80 ptb-sm--80">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="about-inner authentic-about pr--30">
                            <h6 className="heading heading-h6 theme-color wow move-up">WHO WE ARE</h6>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3 heading-font line-height-1-5 wow move-up">
                                Brook is a multi-purpose WordPress theme for creative businesses and companies.
                            </h3>

                            <div className="bk-separator--40"/>
                            <p className="bk_pra font-20 line-height-1-6 dark-2 heading-font2 wow move-up">
                                Brook presents your services with flexible, convenient and multipurpose layouts. You can
                                select your favorite layouts & elements for particular projects with unlimited
                                customization possibilities. Pixel-perfect replication of the designers is intended for
                                both front-end & back-end developers.
                            </p>
                            <div className="bk-separator--65"/>

                            <div className="view-more-btn heading-color heading-font font-18 font-700 theme-color wow move-up">
                                <a href={`${process.env.PUBLIC_URL + '/'}`}>
                                    <span>More about us</span>
                                    <span className="btn-arrow"/>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <AboutThumb
                            thumb={thumb}
                            className="about-thumb text-center text-lg-right mt_md--40 mt_sm--40"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutAuthenticStudio;
