import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Parallax, {Layer} from "react-parallax-scroll";
import CallContentVertical from "../../../components/call-to-action/CallContentVertical";

const CallToActionVerticalThree = ({bgColor, bgImage, overlayColor, overlayOpacity}) => {
    return (
        <Parallax>
            <Layer
                settings={{speed: 0.4, type: 'backgroundY'}}
                style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
            >
                <div
                    className="brook-call-to-action ptb--120 ptb-md--80 ptb-sm--60 position-relative"
                    style={{backgroundColor: bgColor}}
                >
                    <div className="overlay" style={{backgroundColor: overlayColor, opacity: overlayOpacity}}/>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12}>
                                <CallContentVertical
                                    heading="Vertical solid #3"
                                    headingColor="#fff"
                                    btnText="Find out More"
                                    btnLink={'/'}
                                    btnClasses="bk-btn-white text-theme btn-sd-size btn-rounded"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layer>
        </Parallax>
    );
};

export default CallToActionVerticalThree;