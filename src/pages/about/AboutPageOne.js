import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PageContainer from "../../container/page";
import Header from "../../components/header/HeaderEight";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "../../assets/img/bg/bg-image-11.jpg";
import WorkArea from "../../container/work/WorkOne";
import SkillsArea from "../../container/skills/SkillsOne";
import FlexibleImageSlider from "../../container/flexible-image-slider/FlexibleImageSliderOne";
import Services from "../../container/service/ServiceSeven";
import Testimonial from "../../container/testimonial/elements/TestimonialOne";
import ClientLogo from "../../container/client-logo/homes/ClientLogoOne";
import CallToAction from "../../container/call-to-action/pages/CallToActionOne";
import FooterOne from "../../container/footer/FooterOne";

const AboutPageOne = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About 01 || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <PageContainer classes="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <Breadcrumb
                    title={"Brook is a New York-based creative agency"}
                    bgImg={breadcrumbBg}
                />
                <WorkArea/>
                <SkillsArea/>
                <FlexibleImageSlider/>
                <Services/>
                <Testimonial/>
                <ClientLogo/>
                <CallToAction bgColor={"#0038E3"}/>
                <FooterOne/>
            </PageContainer>
        </Fragment>
    );
};

export default AboutPageOne;