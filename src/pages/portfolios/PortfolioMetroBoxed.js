import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbSeven";
import Portfolios from "../../container/portfolio/homes/PortfolioFive";
import Footer from "../../container/footer/FooterOne";

const PortfolioMetroBoxed = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio Metro Boxed || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1 bg_color--1">
                <Header/>
                <Breadcrumb
                    title="Portfolio Metro Boxed"
                />
                <div className="mt--100">
                    <Portfolios/>
                </div>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioMetroBoxed;
