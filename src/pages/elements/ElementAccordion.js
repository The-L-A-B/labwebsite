import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-21.jpg";
import AccordionOne from "../../container/accordion/AccordionOne";
import AccordionTwo from "../../container/accordion/AccordionTwo";
import Footer from "../../container/footer/FooterOne";

const ElementAccordion = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Accordion"
                bg={breadcrumbBg}
            />
            <AccordionOne/>
            <AccordionTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementAccordion;