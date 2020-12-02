import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PopupVideo from "../popup-video";

const BreadcrumbThree = ({title}) => {
    return (
        <div className="brook-breadcrumb-area bg_color--1 ptb--120 breadcrumb-title-bar">
            <Container fluid={true} className="plr--100 plr_md--50 plr_sm--30">
                <Row>
                    <Col lg={12}>
                        <div className="breadcrumb-inner text-left d-inline-block poss_relative">
                            <h1 className="heading heading-h1 large-font-1">
                                We <span className="theme-color">design & build <br/></span>brands
                                and digital projects <br/> for businesses.
                            </h1>
                            <PopupVideo
                                isThumb={false}
                                watchText={null}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                                iconStyleClass={'second-icon'}
                                gradient={false}
                                className="breadcrumb-video-position d-none d-md-block"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreadcrumbThree;
