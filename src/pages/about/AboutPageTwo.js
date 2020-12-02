import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PageContainer from "../../container/page";
import Header from "../../components/header/HeaderEight";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbThree";
import Gallery from "../../container/gallery/GalleryThree";
import Counter from "../../container/counter/CounterFour";
import Skills from "../../container/skills/SkillsTwo";
import Testimonial from "../../container/testimonial/pages/TestimonialOne";
import ClientLogos from "../../container/client-logo/homes/ClientLogoOne";
import CallToAction from "../../container/call-to-action/elements/CallToActionVerticalThree";
import CallToActionBg from "../../assets/img/bg/bg-image-10.jpg";
import FooterOne from "../../container/footer/FooterOne";

const AboutPageTwo = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About 02 || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <PageContainer classes="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <Breadcrumb
                    title={"Brook is a New York-based creative agency"}
                />
                <Gallery/>
                <Counter/>
                <Skills/>
                <Testimonial/>
                <ClientLogos/>
                <CallToAction bgImage={CallToActionBg} overlayColor={'#0038E3'} overlayOpacity={0.8}/>
                <FooterOne/>
            </PageContainer>
        </Fragment>
    );
};

export default AboutPageTwo;