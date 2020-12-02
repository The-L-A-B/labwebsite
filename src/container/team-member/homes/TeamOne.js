import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import teamMembers from '../../../data/team-member'
import TeamMemberItemOne from "../../../components/team-member/TeamMemberItemOne";

const TeamOne = () => {
    return (
        <div className="bk-team-area ptb--60 pb_sm--5 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="team-heading d-flex justify-content-between wow move-up">
                            <div className="heading-left">
                                <h3 className="theme-color">Our creative crew.</h3>
                            </div>
                            <div className="heading-right">
                                <a href={`${process.env.PUBLIC_URL + '/team'}`}>View all members
                                    <i className="fa fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {teamMembers.slice(0, 4).map(member => (
                        <Col key={member.id} sm={6} lg={3}>
                            <TeamMemberItemOne data={member}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TeamOne;
