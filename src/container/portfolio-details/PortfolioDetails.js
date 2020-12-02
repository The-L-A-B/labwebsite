import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import portDetailsData from "../../data/portfolio-details";

const PortfolioDetails = ({position}) => {
    return (
        <div className="brook-portfolio-details bg_color--1 mt_sm--50">
            <Container>
                <Row className="pt--100 pt_md--5 pt_sm--5 pb--80">
                    <Col lg={4} className={`mt_md--40 mt_sm--40 order-1 order-lg-${position === "right" ? 1 : 0}`}>
                        <div className="portfolio-left bk-portfolio-details">
                            <div className="portfolio-main-info">
                                <h3 className="heading heading-h3 line-height-1-42">{portDetailsData.title}</h3>

                                <div
                                    className="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                                    <h6 className="heading heading-h6">ABOUT THE PROJECT</h6>
                                    <div className="desc mt--20">
                                        <p className="bk_pra" dangerouslySetInnerHTML={{__html:portDetailsData.desc}}/>
                                    </div>
                                </div>

                                <div className="portfolio-details-list">
                                    {portDetailsData.meta.map(item => (
                                        <div className="details-list" key={item.id}>
                                            <label>{item.type}</label>
                                            <span><a href={`${process.env.PUBLIC_URL + "/"}`}>{item.text}</a></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={8}
                         className={`text-center text-lg-${position === "right" ? "left" : "right"} order-0 order-lg-${position === "right" ? 0 : 1}`}>
                        <div className="portfolio-right portfolio-details-gallery mt--n40">
                            {portDetailsData.thumbnails.map((thumb, index) => (
                                <div className="portfolio-image mt--40" key={index}>
                                    <img
                                        src={require('../../assets/img/portfolio/details/' + thumb)}
                                        alt={portDetailsData.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className="portfolio-nav-list pt--50 pb--150 pb_md--80 pb_sm--60 pt_md--5 pt_sm--5">
                            <div className="portfolio-page prev">
                                <div className="inner">
                                    <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                        <p>Prev</p>
                                        <h3 className="heading heading-h3">Awe-inspiring <br/> Projects</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-page next mt_sm--30">
                                <div className="inner">
                                    <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                        <p>Next</p>
                                        <h3 className="heading heading-h3">B-sharp High-end <br/> Audio</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioDetails;
