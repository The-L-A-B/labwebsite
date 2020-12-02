import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PageContainer from "../../container/page";
import Header from "../../components/header/HeaderTwo";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbFive";
import IconBoxes from "../../container/icon-box/pages/IconBoxOne";
import Works from "../../container/work/WorkThree";
import TeamMembers from "../../container/team-member/pages/TeamMemberAbout";
import Features from "../../container/about-us/AboutPageArea2";
import CallToAction from "../../container/call-to-action/pages/CallToActionOne";
import FooterOne from "../../container/footer/FooterOne";

const AboutPageFour = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About 04 || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <PageContainer classes="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <Breadcrumb
                    title={"We’re Brook. <br/> A full-service creative agency."}
                />
                <IconBoxes/>
                <Works/>
                <TeamMembers/>
                <Features/>
                <CallToAction bgColor={"#0038E3"}/>
                <FooterOne/>
            </PageContainer>
        </Fragment>
    );
};

export default AboutPageFour;