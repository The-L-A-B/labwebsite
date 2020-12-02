import React from 'react';
import {Row, Col} from "react-bootstrap";
import signature from "../../assets/img/icons/singneture.png";
import thumb from "../../assets/img/about/home-architect-image-04.jpg"

const AboutArchitecture = () => {
    return (
        <div className="brook-story-area ptb--100 ptb-md--80 ptb-sm--60  bg_color--1">
            <Row>
                <Col lg={6}>
                    <div className="pl--380 pr--80 pl_lp--80 pl_lg--50 pr_lg--20 pl_md--50 pr_md--20 pl_sm--30 pr_sm--20">
                        <div className="architecture-story wow move-up">
                            <h6 className="heading heading-h6 body-color">OUR STORY</h6>
                            <div className="bk-separator--25"/>

                            <h2 className="heading heading-h2 line-height-1-25">
                                Running a <br/> successful business <br/>
                                <span className="yellow-color">since 2000</span>
                            </h2>

                            <div className="bk-separator--45"/>

                            <h5 className="heading heading-h5 line-height-1-62">Architecture is both the process and the
                                product of planning, designing, and constructing buildings or any other structures.
                            </h5>
                            <div className="bk-separator--20"/>
                            <p className="bk_pra">Architectural works, in the material form of buildings, are often
                                perceived as cultural symbols and as works of art. Historical civilizations are
                                often
                                identified with their surviving architectural achievements.</p>
                            <div className="bk-separator--55"/>
                            <div className="signature-image">
                                <img src={signature} alt="signature"/>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg={6}>
                    <div className="mt_md--40 mt_sm--40">
                        <div className="architecture-story">
                            <div className="thumb wow move-up">
                                <img src={thumb} alt="architect"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutArchitecture;
