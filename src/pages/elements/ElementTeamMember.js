import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-8.jpg";
import TeamMemberOne from "../../container/team-member/elements/TeamMemberOne";
import TeamMemberTwo from "../../container/team-member/elements/TeamMemberTwo";
import TeamMemberThree from "../../container/team-member/elements/TeamMemberThree";
import TeamMemberFour from "../../container/team-member/elements/TeamMemberFour";
import Footer from "../../container/footer/FooterOne";

const ElementTeamMember = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Team Member"
                bg={breadcrumbBg}
            />
            <TeamMemberOne/>
            <TeamMemberTwo/>
            <TeamMemberThree/>
            <TeamMemberFour/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementTeamMember;