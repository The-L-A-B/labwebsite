import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-5.jpg";
import PricingTableOne from "../../container/pricing-table/PricingTableElement";
import Footer from "../../container/footer/FooterOne";

const ElementPricingTable = () => {
    return (
        <LayoutDefault className="template-font-1 template-color-1">
            <Header/>
            <Breadcrumb
                title="Pricing Table"
                bg={breadcrumbBg}
            />
            <PricingTableOne/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementPricingTable;