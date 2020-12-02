import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderThree";
import HeroBanner from "../../container/hero-banner/HeroCreativeAgency";
import About from "../../container/about-us/AboutCreativeAgency";
import Services from "../../container/service/ServiceTwo";
import Portfolio from "../../container/portfolio/homes/PortfolioTwo";
import FunFact from "../../container/counter/CounterThree";
import Testimonial from "../../container/testimonial/elements/TestimonialFive";
import Blog from "../../container/blog/homes/BlogTwo";
import CallToAction from "../../container/call-to-action/homes/CallToActionOne";
import Footer from "../../container/footer/FooterThree";

const HomeCreativeAgency = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Creative Agency || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-2 template-font-3 bg_color--4" revealFooter={true}>
                <Header/>
                <HeroBanner/>
                <About/>
                <Services/>
                <Portfolio/>
                <FunFact/>
                <Testimonial/>
                <Blog/>
                <CallToAction/>
            </LayoutDefault>
            <Footer/>
        </Fragment>
    );
};

export default HomeCreativeAgency;