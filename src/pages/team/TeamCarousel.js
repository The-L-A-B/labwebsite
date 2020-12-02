import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import TeamMembers from "../../container/team-member/pages/TeamMemberCarousel";
import CallToAction from "../../container/call-to-action/pages/CallToActionTwo";
import Footer from "../../container/footer/FooterOne";

const TeamCarousel = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Team Carousel || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <TeamMembers/>
                <CallToAction bgColor="#fff"/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default TeamCarousel;
