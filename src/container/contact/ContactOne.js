 import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import socialIcons from '../../data/socials';
import {toCapitalize} from "../../helper/toCapitalize";
import Input from "../../components/input";

const ContactOne = () => {
    return (
        <div className="bk-contact-area section-pb-xl bg_color--1">
            <Container>
                <Row>
                    <Col xs={12} lg={3}>
                        <div className="address-inner">
                            <div className="address wow move-up">
                                <h3 className="heading">Visit our studio at</h3>
                                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                            </div>

                            <div className="address mt--60 mb--60 wow move-up">
                                <h3 className="heading">Message us</h3>
                                <p><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
                                <p><a href="tel:+68120034509">(+68) 120034509</a></p>
                            </div>

                            <ul className="social-icon icon-size-medium text-dark text-left tooltip-layout move-up wow">
                                {socialIcons.map(icon => (
                                    <li key={icon.id} className={icon.media}>
                                        <a
                                            className="link hint--bounce hint--top hint--theme"
                                            href={`https://${icon.media}.com/${icon.username}`}
                                            aria-label={toCapitalize(icon.media)}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <i className={`fa fa-${icon.media}`}/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    <Col xs={12} lg={9} xl={{span: 8, offset: 1}} className="mt_md--40 mt_sm--40">
                        <div className="contact-form">
                            <form action="/" className="form-style--1 wow move-up">
                                <div className="row">
                                    <Col lg={6}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-user-o"/>
                                            <Input
                                                type={"text"}
                                                name={"name"}
                                                placeholder={"Name*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-envelope-o"/>
                                            <Input
                                                type={"email"}
                                                name={"email"}
                                                placeholder={"Email*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-phone"/>
                                            <Input
                                                type={"text"}
                                                name={"phone"}
                                                placeholder={"Phone Number"}
                                                required={false}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="input-box">
                                            <Input
                                                type={"textarea"}
                                                name={"message"}
                                                placeholder={"Your message*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="form-action">
                                            <div className="form-description">
                                                I’m available for commissions and collaborations, and i’m <br/>
                                                excited to hear from you about new projects
                                            </div>
                                            <div className="form-submit">
                                                <Input
                                                    type={"submit"}
                                                    value={"Send Message"}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactOne;
