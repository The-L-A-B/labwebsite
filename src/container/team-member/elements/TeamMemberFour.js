 import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import TeamMemberItemThree from "../../../components/team-member/TeamMemberItemThree";
import teamMembers from '../../../data/team-member';

const TeamMemberFour = () => {
    return (
        <div className="brook-team-area bg_color--5 ptb--100 ptb-sm--60 ptb-md--80">
            <Container>
                <Row className="row-30 mt--n30">
                    {teamMembers.slice(0, 3).map(member => (
                        <Col key={member.id} xs={12} sm={6} md={4} className="mt--30">
                            <TeamMemberItemThree key={member.id} data={member}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TeamMemberFour;