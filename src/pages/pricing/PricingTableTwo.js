import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-54.jpg";
import PricingPlans from "../../container/pricing-table/PricingPlansTwo";
import Footer from "../../container/footer/FooterOne";

const PricingTableTwo = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Pricing Table 02 || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                    title="Pricing Table 02"
                    bg={breadcrumbBg}
                />
                <PricingPlans/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PricingTableTwo;
