import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderFive";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import FreelancerContent from "../../layouts/LayoutFreelancer";
import Footer from "../../container/footer/FooterSix";

const HomeFreelancer = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Freelancer || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-4 template-font-1 bg_color--1" revealFooter={true}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <FreelancerContent/>
            </LayoutDefault>
            <Footer/>
        </Fragment>
    );
};

export default HomeFreelancer;