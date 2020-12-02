import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-22.jpg";
import GradationOne from "../../container/gradation/GradationOne";
import GradationTwo from "../../container/gradation/GradationTwo";
import Footer from "../../container/footer/FooterOne";

const ElementGradation = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Gradation"
                bg={breadcrumbBg}
            />
            <GradationOne/>
            <GradationTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementGradation;