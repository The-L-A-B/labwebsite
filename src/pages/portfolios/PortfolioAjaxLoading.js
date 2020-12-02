import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbSeven";
import Portfolios from "../../container/portfolio/pages/PortfolioAjaxLoad";
import Footer from "../../container/footer/FooterOne";

const PortfolioAjaxLoading = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio Ajax Loading || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1 bg_color--5">
                <Header/>
                <Breadcrumb
                    title="Portfolio Ajax Loading"
                />
                <Portfolios wide={false}/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioAjaxLoading;
