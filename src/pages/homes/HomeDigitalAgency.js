import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderThree";
import SliderDigitalAgency from "../../container/slider/SliderDigitalAgency";
import Services from "../../container/service/ServiceThree";
import MotivationalArchive from "../../container/motivational-archive";
import CallToAction from "../../container/call-to-action/homes/CallToActionTwo";
import Portfolios from "../../container/portfolio/homes/PortfolioThree";
import IconBoxes from "../../container/icon-box/homes/IconBoxOne";
import Testimonials from "../../container/testimonial/homes/TestimonialTwo";
import ClientLogo from "../../container/client-logo/homes/ClientLogoOne";
import Footer from "../../container/footer/FooterFour";

const HomeDigitalAgency = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Digital Agency || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-2" revealFooter={false}>
                <Header/>
                <SliderDigitalAgency/>
                <Services/>
                <MotivationalArchive/>
                <CallToAction bgColor={"#0038E3"}/>
                <Portfolios/>
                <IconBoxes/>
                <Testimonials/>
                <ClientLogo/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeDigitalAgency;