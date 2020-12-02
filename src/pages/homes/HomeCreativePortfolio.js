import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderSix";
import HeroArea from "../../container/hero-banner/HeroCreativePortfolio";
import Portfolios from "../../container/portfolio/homes/PortfolioNine";
import Footer from "../../container/footer/FooterFour";

const HomeCreativePortfolio = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Creative Portfolio || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-7 template-font-4 bg_color--3" revealFooter={false}>
                <Header/>
                <HeroArea/>
                <Portfolios/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeCreativePortfolio;