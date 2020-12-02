import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderSeven";
import PopupMenu from "../../components/header/elements/popup";
import HeroArea from "../../container/hero-banner/HeroMinimalPortfolio";
import Portfolios from "../../container/portfolio/homes/PortfolioTen";
import Contact from "../../container/contact/ContactFour";
import Footer from "../../container/footer/FooterEight";

const HomeMinimalPortfolio = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Minimal Portfolio || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupMenu/>
                <HeroArea/>
                <Portfolios/>
                <Contact/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeMinimalPortfolio;