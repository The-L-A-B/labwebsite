import React from 'react';

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-8.jpg";
import ClientLogoOne from "../../container/client-logo/elements/ClientLogoOne";
import ClientLogoTwo from "../../container/client-logo/elements/ClientLogoTwo";
import Footer from "../../container/footer/FooterOne";

const ElementClientLogo = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb title="Client Logos" bg={breadcrumbBg} />
            <ClientLogoOne
                arrows={false}
                dots={false}
                variant="brand-style--1"
                wrapClasses={null}
            />
            <ClientLogoOne
                arrows={true}
                dots={true}
                variant="brand-style--1"
                wrapClasses="section-separator-with--border"
            />
            <ClientLogoTwo
                variant="brand-style--2"
                wrapClasses="section-separator-with--border"
            />
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementClientLogo;