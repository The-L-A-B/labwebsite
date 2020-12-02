import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import thumb from "../../assets/img/about/about-3.jpg";
import PopupVideo from "../../components/popup-video";
import ProgressbarCircle from "../../components/progressbar/ProgressbarCircle";

const WorkThree = () => {
    return (
        <div className="brook-whatdo-area ptb--100 ptb-sm--60 ptb-md--80 bg_color--1">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-center">
                            <h6 className="heading heading-h6 theme-color">What we do</h6>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3">Fresh ideas & unique designs</h3>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center mt--80">
                    <Col lg={6}>
                        <div className="video-popup-wrapper">
                            <PopupVideo
                                isThumb={true}
                                thumb={thumb}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                            />
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="circle-progressbar-wrap mt--n80 mt_sm--0">
                            {data.map(item=>(
                                <div key={item.id} className="radial-progress-single progress-flex mt--80 mt_sm--40 text-center text-lg-left">
                                    <ProgressbarCircle
                                        percentage={item.percent}
                                        bgColor={'#0038E3'}
                                        strokeWidth={3}
                                    />

                                    <div className="content pl--30 pl_mobile--5 pt_mobile--30">
                                        <h5 className="heading heading-h5">{item.title}</h5>
                                        <p className="bk_pra mt--30">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const data = [
    {
        id:1,
        percent: 70,
        title: "Creative Designs",
        content: "Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements."
    },
    {
        id:2,
        percent: 88,
        title: "Unique Solutions",
        content: "Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements."
    }
];

export default WorkThree;
