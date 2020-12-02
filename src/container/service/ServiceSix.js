import React from 'react';
import {Col, Row} from "react-bootstrap";
import Thumb from "../../components/about-us/thumbnail/AboutThumbOne";
import thumb from "../../assets/img/about/home-authentic-studio-image-02.jpg"
import TypedText from "../../components/typed-text";
import PopupVideo from "../../components/popup-video";

const ServiceSix = () => {
    return (
        <div className="brook-service-area plr--100 plr_lg--30 plr_md--50 plr_sm--30">
            <Row className="row--0 bg_color--14 align-items-center video-with-thumb">
                <Col lg={6}>
                    <Thumb
                        thumb={thumb}
                        className="service-thumb authentic-service"
                    />
                </Col>

                <Col lg={6} className="ptb-md--80 ptb-sm--80">
                    <div className="service-content authentic-service plr--170 plr_lg--70 plr_md--30 plr_sm--30">
                        <h6 className="heading heading-h6 theme-color letter-spacing-3 theme-color">BEST SERVICES</h6>
                        <div className="bk-separator--30"/>
                        <h1 className="heading heading-h1 heading-font line-height-1-5 cd-headline clip is-full-width move-up wow">
                            Top-notch creative theme for all kind <br/> of
                            <span className="cd-words-wrapper theme-color">  <TypedText
                                    content={['graphic', 'interactive', 'projects']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </span>
                        </h1>
                    </div>
                </Col>

                <PopupVideo
                    isThumb={false}
                    iconStyleClass={'third-icon'}
                    channel={'youtube'}
                    videoId={'9No-FiEInLA'}
                    gradient={false}
                    className={'position--center'}
                />
            </Row>
        </div>
    );
};

export default ServiceSix;
