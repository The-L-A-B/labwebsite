import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderThree";
import SliderAuthenticStudio from "../../container/slider/SliderAuthenticStudio";
import About from "../../container/about-us/AboutAuthenticStudio";
import Services from "../../container/service/ServiceSix";
import Portfolios from "../../container/portfolio/homes/PortfolioSeven";
import IconBoxTwo from "../../container/icon-box/homes/IconBoxTwo";
import Testimonial from "../../container/testimonial/homes/TestimonialFive";
import Footer from "../../container/footer/FooterFour";

const HomeAuthenticStudio = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Authentic Studio || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-20 template-font-2 bg_color--1" revealFooter={false}>
                <Header/>
                <SliderAuthenticStudio/>
                <About/>
                <Services/>
                <Portfolios/>
                <IconBoxTwo/>
                <Testimonial/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeAuthenticStudio;