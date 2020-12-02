import React from 'react';

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-8.jpg";
import FlexibleImageSliderOne from "../../container/flexible-image-slider/FlexibleImageSliderOne";
import FlexibleImageSliderTwo from "../../container/flexible-image-slider/FlexibleImageSliderTwo";
import FlexibleImageSliderThree from "../../container/flexible-image-slider/FlexibleImageSliderThree";
import Footer from "../../container/footer/FooterOne";

const ElementFlexibleImageSlider = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Flexible Image Slider"
                bg={breadcrumbBg}
            />
            <FlexibleImageSliderOne/>
            <FlexibleImageSliderTwo/>
            <FlexibleImageSliderThree/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementFlexibleImageSlider;