import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProgressbarLine from "../../components/progressbar/ProgressbarLine";

const SkillsOne = () => {
    return (
        <div className="brook-skill-area pt--50 pt_md--10 pt_sm--10 bg_color--1">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="brook-skill">
                            <h3 className="heading heading-h3 theme-color lineheight-1-58">
                                We design & build brands, campaigns and digital projects for businesses.
                            </h3>
                        </div>
                    </Col>

                    <Col lg={7} className="mt_md--30 mt_sm--30">
                        <div className="brook-skill ml-lg-5 mt--n25">
                            <ProgressbarLine title="UI/UX" bgColor="#0038E3" percentage={'85%'}/>
                            <ProgressbarLine title="IDEAS" bgColor="#0038E3" percentage={'75%'}/>
                            <ProgressbarLine title="MARKETING" bgColor="#0038E3" percentage={'90%'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SkillsOne;
