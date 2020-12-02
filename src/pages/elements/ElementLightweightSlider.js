import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-22.jpg";
import LightweightSliderOne from "../../container/lightweight-slider/LightweightSliderOne";
import LightweightSliderTwo from "../../container/lightweight-slider/LightweightSliderTwo";
import LightweightSliderThree from "../../container/lightweight-slider/LightweightSliderThree";
import Footer from "../../container/footer/FooterOne";

const ElementLightweightSlider = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Lightweight Slider"
                bg={breadcrumbBg}
            />
            <LightweightSliderOne/>
            <LightweightSliderTwo/>
            <LightweightSliderThree/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementLightweightSlider;