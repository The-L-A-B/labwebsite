import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-8.jpg";
import CarouselSliderOne from "../../container/carousel-slider/CarouselSliderOne";
import CarouselSliderTwo from "../../container/carousel-slider/CarouselSliderTwo";
import CarouselSliderThree from "../../container/carousel-slider/CarouselSliderThree";
import Header from "../../components/header/HeaderTwo";
import Footer from "../../container/footer/FooterOne";

const ElementCarouselSlider = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Carousel Slider"
                bg={breadcrumbBg}
            />
            <CarouselSliderOne/>
            <CarouselSliderTwo/>
            <CarouselSliderThree/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementCarouselSlider;