import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Footer from "../../container/footer/FooterOne";
import PortfolioDetails from "../../container/portfolio-details/PortfolioDetails";

const PortfolioDetailsRight = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio Details Right || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <PortfolioDetails position="right"/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioDetailsRight;
