import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-41.jpg";
import ListElement from "../../container/list";
import Footer from "../../container/footer/FooterOne";

const ElementList = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Lists"
                bg={breadcrumbBg}
            />
            <ListElement/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementList;