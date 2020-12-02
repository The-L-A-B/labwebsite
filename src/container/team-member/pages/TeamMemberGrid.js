import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TeamMemberItem from "../../../components/team-member/TeamMemberItemThree";
import teamMembers from "../../../data/team-member";

const TeamMemberGrid = () => {
    return (
        <div className="brook-team-area bg_color--1 mt--180 mt_sm--100">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="breadcrumb-inner text-center mb--100">
                            <h1 className="heading heading-h1 line-height-1-5">
                                The A-team of <span className="theme-color">awesomeness</span><br/> & creative people
                            </h1>
                        </div>
                    </Col>
                </Row>

                <Row className="mt--n40">
                    {teamMembers.map(member => (
                        <Col key={member.id}  sm={6} lg={4} className="mt--40 mt_sm--30">
                            <TeamMemberItem data={member}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TeamMemberGrid;
