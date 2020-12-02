import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-43.jpg";
import ProgressbarPrimaryColor from "../../container/progressbar/ProgressbarPrimaryColor";
import ProgressbarCustomColor from "../../container/progressbar/ProgressbarCustomColor";
import ProgressbarRounded from "../../container/progressbar/ProgressbarRounded";
import Footer from "../../container/footer/FooterOne";

const ElementProgressbar = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Progressbar Chart"
                bg={breadcrumbBg}
            />
            <ProgressbarPrimaryColor/>
            <ProgressbarCustomColor/>
            <ProgressbarRounded/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementProgressbar;