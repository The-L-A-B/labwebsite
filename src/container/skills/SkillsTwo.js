import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProgressbarLine from "../../components/progressbar/ProgressbarLine";

const SkillsTwo = () => {
    return (
        <div className="brook-skill-area pt--50 pt_md--10 pt_sm--10 bg_color--1">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="brook-skill wow move-up">
                            <h3 className="heading heading-h3 lineheight-1-44">
                                Effective solution <br/> for every <br/>
                                businesses
                            </h3>
                            <div className="bk-separator--40"/>
                            <p className="bk_pra">Brook presents your services with flexible, convenient and
                                multipurpose layouts. You can select your favorite layouts & elements for
                                particular projects with unlimited customization possibilities.</p>
                        </div>
                    </Col>

                    <Col lg={{span: 7, offset: 1}} className="mt_md--40 mt_sm--40">
                        <div className="brook-skill mt--n25">
                            <ProgressbarLine title="UI/UX" bgColor="#0038E3" percentage={'85%'}/>
                            <ProgressbarLine title="IDEAS" bgColor="#0038E3" percentage={'75%'}/>
                            <ProgressbarLine title="MARKETING" bgColor="#0038E3" percentage={'90%'}/>
                            <ProgressbarLine title="CONSULTING" bgColor="#0038E3" percentage={'80%'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SkillsTwo;
