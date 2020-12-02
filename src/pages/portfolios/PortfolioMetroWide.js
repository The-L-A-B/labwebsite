import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbSeven";
import Portfolios from "../../container/portfolio/homes/PortfolioTen";
import Footer from "../../container/footer/FooterOne";

const PortfolioMetroWide = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio Metro Wide || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1 bg_color--5">
                <Header/>
                <Breadcrumb
                    title="Portfolio Metro Wide"
                />
                <Portfolios/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioMetroWide;
