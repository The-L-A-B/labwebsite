import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import AboutThumbOne from "../../components/about-us/thumbnail/AboutThumbOne";
import aboutThumb from "../../assets/img/about/home-creative-agency-image-01.png"
import AboutContentOne from "../../components/about-us/content/AboutContentOne";

const AboutCreativeAgency = () => {
    return (
        <div className="bk-about-area section-ptb-100">
            <Container>
                <Row className="about--creative align-items-center">
                    <Col xs={12} lg={6}>
                        <AboutThumbOne thumb={aboutThumb}/>
                    </Col>

                    <Col xs={12} lg={6} className="mt_md--40 mt_sm--40">
                        <AboutContentOne
                            title={'About Us'}
                            heading={"We're motivated by the <span class='theme-creative'>desire to achieve.</span>"}
                            content={"In order for you to achieve the things you are capable of, you need to constantly be creating goals for yourself."}
                            btnText={"More Details"}
                            btnLink={'/'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutCreativeAgency;
