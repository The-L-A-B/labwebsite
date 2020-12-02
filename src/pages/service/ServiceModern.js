import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PageContainer from "../../container/page";
import Header from "../../components/header/HeaderTwo";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbTwo";
import BreadcrumbBg from "../../assets/img/bg/bg-image-15.jpg";
import Services from "../../container/service/ServiceNine";
import CallToAction from "../../container/call-to-action/pages/CallToActionOne";
import FooterOne from "../../container/footer/FooterOne";

const ServiceModern = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Service Modern || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <PageContainer classes="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <Breadcrumb
                    title="Full Services Creative Agency."
                    bgImg={BreadcrumbBg}
                    opacityColor="#0038E3"
                />
                <Services/>
                <CallToAction bgColor={"#0038E3"}/>
                <FooterOne/>
            </PageContainer>
        </Fragment>
    );
};

export default ServiceModern;
