import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

import Logo from "../../components/header/elements/logo";
import Widget from "../../components/widget";
import Instagram from "../../components/instagram";

import logo from '../../assets/img/logo/brook-white2.png';
import socials from '../../data/socials';
import instagramData from '../../data/instagram';

const FooterFive = () => {
    return (
        <footer id="page-footer-wrapper" className="page-footer-wrapper fixed-footer bg_color--11 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5">
            <div className="bk-footer-inner pt--150 pb--30 pt_sm--100">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} lg={4}>
                            <Widget
                                wrapClasses="text-var--2"
                                title={null}
                            >
                                <Logo logo={logo}/>
                                <div className="footer-inner">
                                    <p>
                                        Brook is a multi-purpose WordPress theme for big and small-sized businesses.Enjoy the theme's original design, functional features & responsive layouts.
                                    </p>
                                </div>
                            </Widget>
                        </Col>

                        <Col xs={12} sm={6} lg={2} className="mt_mobile--40">
                            <Widget
                                wrapClasses="text-var--2 menu--about"
                                title="About Us"
                            >
                                <div className="footer-menu">
                                    <ul className="ft-menu-list bk-hover">
                                        <li><Link to={process.env.PUBLIC_URL + "/about-one"}>About Us</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Team</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/career"}>Career</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/service-classic"}>Services</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                    </ul>
                                </div>
                            </Widget>
                        </Col>

                        <Col xs={12} sm={6} lg={3} className="mt_md--40 mt_sm--40">
                            <Widget
                                wrapClasses="text-var--2 menu--about"
                                title="Contact"
                            >
                                <div className="footer-address">
                                    <div className="bk-hover">
                                        <p>2005 Stokes Isle Apt. 896, <br/> Venaville 10010, USA</p>
                                        <p><a href={process.env.PUBLIC_URL + "/"}>info@yourdomain.com</a></p>
                                        <p><a href={process.env.PUBLIC_URL + "/"}>(+68) 120034509</a></p>
                                    </div>
                                    <div className="social-share social--transparent text-white">
                                        {socials.map(social => (
                                            <a key={social.id} href={`hhtps://${social.media}.com/${social.username}`}>
                                                <i className={`fa fa-${social.media}`}/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Widget>
                        </Col>

                        <Col xs={12} sm={6} lg={3} className="mt_md--40 mt_sm--40">
                            <Widget
                                wrapClasses="text-var--2 menu--instagram"
                                title="Instagram"
                            >
                                <div className="ft-instagram-list">
                                    <div className="instagram-grid-wrap">
                                        {instagramData.map(instagram => (
                                            <Instagram key={instagram.id} data={instagram} variant="grid-style--1"/>
                                        ))}
                                    </div>
                                </div>
                            </Widget>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="copyright ptb--50 text-var-2">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <div className="copyright-left text-md-left text-center">
                                <ul className="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                                    <li><Link to={process.env.PUBLIC_URL + "/blog"}>Our blog</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/portfolio"}>Latest projects</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact us</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="copyright-right text-md-right text-center">
                                <p>© {new Date().getFullYear()} Life After Bootcamp. All Rights Reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default FooterFive;