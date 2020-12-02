import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PopupVideo from "../../components/popup-video";
import thumb from "../../assets/img/about/macbook-01.png"

const AboutPageArea = () => {
    return (
        <div className="brook-video-area bg_color--1 ptb--130 ptb-md--80 ptb-sm--60">
            <Container>
                <Row>
                    <Col lg={7}>
                        <PopupVideo
                            isThumb={true}
                            thumb={thumb}
                            channel={'youtube'}
                            videoId={'9No-FiEInLA'}
                        />
                    </Col>

                    <Col lg={5} className="mt_sm--30 mt_md--30">
                        <div className="video-content move-up wow">
                            <h3 className="heading heading-h3">Fresh ideas & unique <br/> designs</h3>
                            <div className="bk-separator--25"/>
                            <p className="bk_pra">Brook presents your services with flexible, convenient and
                                multipurpose layouts. You can select your favorite layouts & elements for
                                particular projects with unlimited customization possibilities.</p>
                            <div className="bk-separator--40"/>
                            <a className="more-details-btn" href={`${process.env.PUBLIC_URL + "/"}`}>
                                <span>More details</span>
                                <i className="fa fa-arrow-right"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutPageArea;
