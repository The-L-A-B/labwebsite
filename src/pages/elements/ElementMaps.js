import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-54.jpg";
import MapOne from "../../container/maps/elements/MapOne";
import MapTwo from "../../container/maps/elements/MapTwo";
import Footer from "../../container/footer/FooterOne";

const ElementMaps = () => {
    return (
        <LayoutDefault className="template-font-1 template-color-1">
            <Header/>
            <Breadcrumb
                title="Maps"
                bg={breadcrumbBg}
            />
            <MapOne/>
            <MapTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementMaps;