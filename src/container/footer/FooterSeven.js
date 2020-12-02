import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Logo from "../../components/header/elements/logo";
import logo from '../../assets/img/logo/brook-white2.png';
import socials from '../../data/socials';
import {toCapitalize} from '../../helper/toCapitalize';

const FooterSeven = () => {
    return (
        <footer className="brook-footer-area plr--100 plr_lg--30 plr_md--30 plr_sm--30 move-up wow">
            <div className="pt--70 pb--80">
                <Row>
                    <Col md={6} lg={4}>
                        <div className="inner text-center text-md-left">
                            <h6 className="heading heading-h6 text-white font-16 line-height-1-88 font-400">
                                Brook React Template <br/> © Designed in {new Date().getFullYear()} by <strong>Brook</strong>
                            </h6>
                        </div>
                    </Col>

                    <Col md={6} lg={3} xl={4} className="mt_sm--40">
                        <div className="text-center">
                            <Logo logo={logo}/>
                        </div>
                    </Col>

                    <Col md={6} lg={5} xl={4}>
                        <div className="copyright-right">
                            <ul className="social-icon style-solid-rounded-icon icon-size-medium text-center text-lg-right">
                                {socials.map(icon=>(
                                    <li key={icon.id} className={icon.media}>
                                        <a href={`https://${icon.media}.com/${icon.username}`}
                                           className="link hint--bounce hint--top hint--white"
                                           aria-label={toCapitalize(icon.media)}
                                        >
                                            <i className={`fa fa-${icon.media}`}/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default FooterSeven;
