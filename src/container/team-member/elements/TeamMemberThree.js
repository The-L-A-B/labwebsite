import React from 'react';
import SlickSlider from "../../../components/slick";
import TeamMemberItemThree from "../../../components/team-member/TeamMemberItemThree";
import teamMembers from '../../../data/team-member';

const TeamMemberThree = () => {

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
        slidesToShow: 5,
        infinite: false,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                "breakpoint": 1201,
                "settings": {
                    slidesToShow: 4
                }
            },
            {
                "breakpoint": 801,
                "settings": {
                    slidesToShow: 3
                }
            },
            {
                "breakpoint": 601,
                "settings": {
                    slidesToShow: 2
                }
            },
            {
                "breakpoint": 481,
                "settings": {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="brook-team-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80 slick-arrow-hover">
            <SlickSlider
                settings={settings}
                classes="brook-element-carousel slick-arrow-center slick-arrow-triangle slick-gutter-30"
            >
                {teamMembers.map(member => (
                    <TeamMemberItemThree key={member.id} data={member}/>
                ))}
            </SlickSlider>
        </div>
    );
};

export default TeamMemberThree;