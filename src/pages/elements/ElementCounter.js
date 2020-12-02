import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-28.jpg";
import CounterOne from "../../container/counter/CounterOne";
import CounterTwo from "../../container/counter/CounterTwo";
import Footer from "../../container/footer/FooterOne";

const ElementCounter = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Counter"
                bg={breadcrumbBg}
            />
            <CounterOne/>
            <CounterTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementCounter;