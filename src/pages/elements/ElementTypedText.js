import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-21.jpg";
import TypedTextContainer from "../../container/typed-text";
import Footer from "../../container/footer/FooterOne";

const ElementTypedText = () => {
    return (
        <LayoutDefault className="template-font-1 template-color-1">
            <Header/>
            <Breadcrumb
                title="Typed Text"
                bg={breadcrumbBg}
            />
            <TypedTextContainer/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementTypedText;