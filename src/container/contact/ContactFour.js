import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ContactFour = () => {
    return (
        <div className="minimal-portfolio-contact-area pt--170 pb--100 pt_sm--80 pb_sm--40 pt_md--80 pb_md--40">
            <div className="pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
                <Row>
                    <Col lg={4} className="d-none d-lg-block">
                        <div className="bk-footer-widget">
                            <div className="bk-separator--65"/>
                            <div className="basic-dark-line"/>
                        </div>
                    </Col>

                    <Col lg={8} xl={{span: 7, offset: 1}}>
                        <div className="bk-footer-widget">
                            <h1 className="heading heading-h1 font-80">Work with us?</h1>
                            <div className="bk-separator--60"/>
                            <div className="row minimal-home-address">
                                <Col md={6}>
                                    <div className="mini-address">
                                        <h4 className="heading heading-h4">Visit our studio at</h4>
                                        <div className="bk-separator--10"/>
                                        <p className="bk_pra font-16 line-height-1-87">
                                            2005 Stokes Isle Apt. 896, Venaville 10010, USA
                                        </p>
                                    </div>
                                </Col>

                                <Col md={6} className="mt_sm--40">
                                    <div className="mini-address">
                                        <h4 className="heading heading-h4">Message us</h4>
                                        <div className="bk-separator--10"/>
                                        <p className="bk_pra font-16 bk-hover">
                                            <a className="color-dark" href={`${process.env.PUBLIC_URL + '/'}`}>info@yourdomain.com</a>
                                        </p>
                                        <p className="bk_pra font-16 bk-hover">
                                            <a className="color-dark"
                                               href={`${process.env.PUBLIC_URL + '/'}`}>
                                                info@yourdomain.com
                                            </a>
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactFour;
