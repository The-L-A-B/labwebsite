import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-8.jpg";
import IconBoxOne from "../../container/icon-box/elements/IconBoxOne";
import IconBoxTwo from "../../container/icon-box/elements/IconBoxTwo";
import IconBoxThree from "../../container/icon-box/elements/IconBoxThree";
import IconBoxFour from "../../container/icon-box/elements/IconBoxFour";
import Footer from "../../container/footer/FooterOne";

const ElementIconBox = () => {
    return (
        <LayoutDefault>
            <Header/>
            <Breadcrumb
                title="Icon Boxes"
                bg={breadcrumbBg}
            />
            <IconBoxOne/>
            <IconBoxTwo/>
            <IconBoxThree/>
            <IconBoxFour/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementIconBox;