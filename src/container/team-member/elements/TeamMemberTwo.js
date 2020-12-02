import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SlickSlider from "../../../components/slick";
import TeamMemberItemTwo from "../../../components/team-member/TeamMemberItemTwo";
import teamMembers from '../../../data/team-member';

const TeamMemberTwo = () => {

    const NextArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-right"/>
            </button>
        );
    };

    const PrevArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-left"/>
            </button>
        );
    };

    const settings = {
        slidesToShow: 3,
        infinite: false,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                "breakpoint": 801,
                "settings": {
                    slidesToShow: 2
                }
            },
            {
                "breakpoint": 601,
                "settings": {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="brook-team-area bg_color--5 ptb--100 ptb-sm--60 ptb-md--80 slick-arrow-hover">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SlickSlider
                            settings={settings}
                            classes="brook-element-carousel slick-arrow-center slick-arrow-rounded"
                        >
                            {teamMembers.slice(0, 4).map(member => (
                                <TeamMemberItemTwo key={member.id} data={member}/>
                            ))}
                        </SlickSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamMemberTwo;