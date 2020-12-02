import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SlickSlider from "../../../components/slick";
import TeamMemberItemTwo from "../../../components/team-member/TeamMemberItemTwo";
import teamMembers from '../../../data/team-member';

const TeamMemberAbout = () => {

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
                        <div className="bk-title--default text-center mb--70">
                            <h6 className="heading heading-h6 theme-color">TEAM MEMBERS</h6>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3">Our creative crew</h3>
                        </div>

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

export default TeamMemberAbout;