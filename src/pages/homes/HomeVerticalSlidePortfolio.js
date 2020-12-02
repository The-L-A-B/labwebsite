import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import LayoutFullPage from "../../layouts/LayoutFullPage";
import Header from "../../components/header/HeaderSix";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMenu from "../../components/header/elements/popup";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import HeroBanner from '../../container/hero-banner/HeroVerticalSlidePortfolio';
import PortfolioItem from "../../components/portfolio/PortfolioItemFullPage";
import portfolios from '../../data/portfolio/portfolio-two.json'

const HomeVerticalSlidePortfolio = () => {

    const characters = ['E', 'C', 'V'];

    const options = {
        navigation: true
    }

    return (
        <Fragment>
            <Helmet>
                <title>{`Vertical Slide Portfolio || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-21 template-font-2" revealFooter={false}>
                <Header/>
                <PopupMenu/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <LayoutFullPage options={options}>
                    <HeroBanner/>
                    {portfolios.slice(0, 3).map(portfolio => (
                        <PortfolioItem
                            key={portfolio.id}
                            number={portfolio.id}
                            title={portfolio.title}
                            thumb={require('../../assets/img/portfolio/fullscreen/' + portfolio.thumb)}
                            category={portfolio.category}
                            character={characters[portfolio.id - 1]}
                            className="section"
                        />
                    ))}
                </LayoutFullPage>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeVerticalSlidePortfolio;