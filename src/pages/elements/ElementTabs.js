import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-58.jpg";
import TabOne from "../../container/tabs/TabOne";
import TabTwo from "../../container/tabs/TabTwo";
import Footer from "../../container/footer/FooterOne";

const ElementTabs = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Tabs"
                bg={breadcrumbBg}
            />
            <TabOne/>
            <TabTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementTabs;