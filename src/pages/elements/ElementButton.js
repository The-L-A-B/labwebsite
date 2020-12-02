import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-33.jpg";
import ButtonsContainer from "../../container/buttons/Buttons";
import Footer from "../../container/footer/FooterOne";

const ElementButton = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Buttons"
                bg={breadcrumbBg}
            />
            <ButtonsContainer/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementButton;