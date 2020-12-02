import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderOne";
import HeroSlider from "../../container/slider/SliderBusiness";
import Services from "../../container/service/ServiceOne";
import Portfolios from "../../container/portfolio/homes/PortfolioOne";
import FunFact from "../../container/funfact/FunfactOne";
import Team from "../../container/team-member/homes/TeamOne";
import Testimonial from "../../container/testimonial/homes/TestimonialOne";
import ClientLogo from "../../container/client-logo/homes/ClientLogoOne";
import Blogs from "../../container/blog/homes/BlogOne";
import Contact from "../../container/contact/ContactOne";
import Footer from "../../container/footer/FooterTwo";


const HomeBusiness = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Business || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-2">
                <Header/>
                <HeroSlider/>
                <Services/>
                <Portfolios/>
                <FunFact/>
                <Team/>
                <Testimonial/>
                <ClientLogo
                    arrows={false}
                    dots={false}
                    variant={'brand-style--1'}
                />
                <Blogs/>
                <Contact/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeBusiness;