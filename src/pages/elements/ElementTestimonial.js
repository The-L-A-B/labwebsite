import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-1.jpg";
import TestimonialOne from "../../container/testimonial/elements/TestimonialOne";
import TestimonialTwo from "../../container/testimonial/elements/TestimonialTwo";
import TestimonialThree from "../../container/testimonial/elements/TestimonialThree";
import TestimonialFour from "../../container/testimonial/elements/TestimonialFour";
import TestimonialFive from "../../container/testimonial/elements/TestimonialFive";
import TestimonialSix from "../../container/testimonial/elements/TestimonialSix";
import Footer from "../../container/footer/FooterOne";

const ElementTestimonial = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Testimonials"
                bg={breadcrumbBg}
            />
            <TestimonialOne/>
            <TestimonialTwo/>
            <TestimonialThree/>
            <TestimonialFour/>
            <TestimonialFive/>
            <TestimonialSix/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementTestimonial;