import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/SideHeader";
import SliderMinimalAgency from "../../container/slider/SliderMinimalAgency";
import About from "../../container/about-us/AboutMinimalAgency";
import Portfolios from "../../container/portfolio/homes/PortfolioFive";
import ClientLogo from "../../container/client-logo/homes/ClientLogoThree";
import PopupMenu from "../../components/header/elements/popup";
import Footer from "../../container/footer/FooterFour";

const HomeMinimalAgency = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Minimal Agency || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-19 template-font-4" revealFooter={false}>
                <Header/>
                <PopupMenu/>
                <SliderMinimalAgency/>
                <About/>
                <Portfolios/>
                <ClientLogo/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeMinimalAgency;