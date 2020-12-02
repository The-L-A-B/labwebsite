import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PageContainer from "../../container/page";
import Header from "../../components/header/HeaderTwo";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbSix";
import Services from "../../container/service/ServiceEight";
import Works from "../../container/work/WorkFour";
import CallToAction from "../../container/call-to-action/pages/CallToActionOne";
import FooterOne from "../../container/footer/FooterOne";

const ServiceClassic = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Service Classic || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <PageContainer classes="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <Breadcrumb
                    title="SERVICES"
                    heading="What we do"
                    text="We focused on a very pragmatic modernist approach, intense contract documentation, and high speed response. We’ve distinguished ourselves with the projects we got built."
                />
                <Services/>
                <Works/>
                <CallToAction bgColor={"#0038E3"}/>
                <FooterOne/>
            </PageContainer>
        </Fragment>
    );
};

export default ServiceClassic;
