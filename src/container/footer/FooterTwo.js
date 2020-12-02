import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import Logo from "../../components/header/elements/logo";
import Widget from "../../components/widget";
import Copyright from "../../components/footer/Copyright";
import logo from '../../assets/img/logo/brook.png';
import socials from '../../data/socials';

const FooterTwo = () => {
    return (
        <footer
            className="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
            <div className="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20">
                <Row>
                    <Col xs={12} sm={6} lg={5} xl={7}>
                        <Widget
                            wrapClasses="text-var--2"
                            title={null}
                        >
                            <Logo logo={logo}/>
                        </Widget>
                    </Col>

                    <Col xs={12} sm={6} lg={3} xl={2} className="mt_mobile--40">
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

                    <Col xs={12} sm={6} lg={4} xl={3} className="mt_md--40 mt_sm--40">
                        <Widget
                            wrapClasses="menu--about"
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
                                        <a key={social.id} href={`https://${social.media}.com/${social.username}`}>
                                            <i className={`fa fa-${social.media}`}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Widget>
                    </Col>
                </Row>
            </div>

            <div className="copyright ptb--50">
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
                            <Copyright/>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default FooterTwo;