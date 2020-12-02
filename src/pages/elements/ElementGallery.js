import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-21.jpg";
import GalleryOne from "../../container/gallery/GalleryOne";
import GalleryTwo from "../../container/gallery/GalleryTwo";
import Footer from "../../container/footer/FooterOne";

const ElementGallery = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Gallery"
                bg={breadcrumbBg}
            />
            <GalleryOne/>
            <GalleryTwo/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementGallery;