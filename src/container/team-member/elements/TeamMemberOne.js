import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TeamMemberItemOne from "../../../components/team-member/TeamMemberItemOne";
import teamMembers from '../../../data/team-member';

const TeamMemberOne = () => {
    return (
        <div className="brook-team-area bg_color--1 pb--150 pt--120 pt_md--80 pt_sm--80  pb_md--80 pb_sm--80">
            <Container>
                <Row>
                    {teamMembers.slice(0, 4).map(member => (
                        <Col key={member.id} xs={12} sm={6} md={4} lg={3}>
                            <TeamMemberItemOne data={member}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TeamMemberOne;