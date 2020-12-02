import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-33.jpg";
import FormOne from "../../container/form/FormOne";
import FormTwo from "../../container/form/FormTwo";
import Footer from "../../container/footer/FooterOne";

const ElementForms = () => {
    return (
        <LayoutDefault className="template-color-1 template-color-1">
            <Header/>
            <Breadcrumb
                title="Contact & Subscribe Form"
                bg={breadcrumbBg}
            />
            <FormOne/>
            <FormTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementForms;