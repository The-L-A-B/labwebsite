import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderThree";
import HeroBanner from "../../container/hero-banner/HeroDesignStudio";
import Services from "../../container/service/ServiceFour";
import Team from "../../container/team-member/homes/TeamTwo";
import About from "../../container/about-us/AboutDesignStudio";
import ClientLogo from "../../container/client-logo/homes/ClientLogoTwo";
import Testimonial from "../../container/testimonial/homes/TestimonialThree";
import Blog from "../../container/blog/homes/BlogThree";
import Map from "../../container/maps/homes/MapOne";
import Footer from "../../container/footer/FooterThree";

const HomeDesignStudio = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Design Studio || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-3 template-font-1" revealFooter={true}>
                <Header/>
                <HeroBanner/>
                <Services/>
                <Team/>
                <About/>
                <ClientLogo/>
                <Testimonial/>
                <Blog/>
                <Map/>
            </LayoutDefault>
            <Footer/>
        </Fragment>
    );
};

export default HomeDesignStudio;