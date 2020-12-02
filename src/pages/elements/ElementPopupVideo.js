import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-21.jpg";
import PopupVideoWithThumb from "../../container/popup-video/PopupVideoWithThumb";
import PopupVideoButtons from "../../container/popup-video/PopupVideoButtons";
import Footer from "../../container/footer/FooterOne";

const ElementPopupVideo = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Popup Video"
                bg={breadcrumbBg}
            />
            <PopupVideoWithThumb/>
            <PopupVideoButtons/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementPopupVideo;