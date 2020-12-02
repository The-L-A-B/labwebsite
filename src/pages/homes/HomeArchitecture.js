import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderFour";
import SliderArchitecture from "../../container/slider/SliderArchitecture";
import About from "../../container/about-us/AboutArchitecture";
import Services from "../../container/service/ServiceFive";
import LatestProject from '../../container/portfolio/homes/PortfolioFour'
import Testimonial from "../../container/testimonial/homes/TestimonialFour";
import Blog from "../../container/blog/homes/BlogFour";
import CallToAction from "../../container/call-to-action/homes/CallToActionThree";
import ContactArea from "../../container/contact/ContactTwo";
import Footer from "../../container/footer/FooterFive";

const HomeArchitecture = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Architecture || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-4 template-font-1 bg_color--1" revealFooter={true}>
                <Header/>
                <SliderArchitecture/>
                <About/>
                <Services/>
                <LatestProject/>
                <Testimonial/>
                <Blog/>
                <CallToAction bgColor={'#FCB72B'}/>
                <ContactArea/>
            </LayoutDefault>
            <Footer/>
        </Fragment>
    );
};

export default HomeArchitecture;