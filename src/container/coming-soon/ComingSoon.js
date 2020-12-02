import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import comingBg from "../../assets/img/bg/bg-image-58.jpg";
import Logo from "../../components/header/elements/logo";
import logo from "../../assets/img/logo/simple-light-logo.png";
import Countdown from "react-countdown";
import Renderer from "../../components/countdown-clock/CountdownRender";
import Input from "../../components/input";

const ComingSoonContent = () => {
    return (
        <div className="page-template-coming-soon bg_color--3 text-center text-md-left">
            <div className="site">
                <Row>
                    <Col
                        xs={{order:2}}
                        lg={{span:4, order:1}}
                        xl={6}
                        className="d-none d-lg-block fullscreen"
                        style={{backgroundImage: `url(${comingBg})`, backgroundSize: 'cover'}}
                    />

                    <Col xs={{order:1}} lg={{span:8, order:2}} xl={6} className="d-flex align-items-center fullscreen">
                        <div className="maintenance-wrapper coming-soon-wrapper plr--95">
                            <div className="inner">
                                <Logo logo={logo}/>

                                <div className="content mt--95 mt_lg--30 mt_md--30 mt_sm--30">
                                    <h3 className="heading heading-h3 text-white">
                                        Something awesome is in the works.
                                    </h3>
                                    <div
                                        className="box-timer countdown-style-1 bg-solid-grey mt--95 mt_lg--30 mt_md--30 mt_sm--30">
                                        <div className="countbox timer-grid">
                                            <Countdown date={'2021-04-15'} renderer={Renderer}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-wrapper mt--75 mt_lg--30 mt_md--30 mt_sm--30">
                                    <Form className="maintenance-form">
                                        <Input
                                            type='email'
                                            placeholder="Your e-mail"
                                        />
                                        <Button>Subscribe</Button>
                                    </Form>
                                    <p className="form-desc"> You can subscribe us to get noticed when our website is ready.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ComingSoonContent;
