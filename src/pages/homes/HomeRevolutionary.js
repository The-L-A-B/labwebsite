import React, {useState,Fragment} from 'react';
import VisibilitySensor from "react-visibility-sensor";

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderThree";
import HeroBanner from '../../container/hero-banner/HeroRevolutionary'
import About from "../../container/about-us/AboutRevolutionary";
import Portfolios from "../../container/portfolio/homes/PortfolioEight";
import Blogs from "../../container/blog/homes/BlogSix";
import ClientLogos from "../../container/client-logo/homes/ClientLogoFour";
import InstagramFeed from "../../container/instagram-feed/InstagramFeedTwo";
import Footer from "../../container/footer/FooterSeven";

const HomeRevolutionary = () => {

    const [bgColor, setBgColor] = useState('#3d088e');

    return (
        <LayoutDefault className="template-color-6 template-font-1">
            <div className="home-revolutionary" style={{backgroundColor: bgColor, transition:'2s'}}>
                <Header/>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#3d088e');
                }}>
                    <HeroBanner/>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#5e0891');
                }}>
                    <About/>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#ae2883');
                }}>
                    <Portfolios/>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#f05874');
                }}>
                    <Blogs/>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#f05874');
                }}>
                    <ClientLogos/>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#ff7e43');
                }}>
                    <Fragment>
                        <InstagramFeed/>
                        <Footer/>
                    </Fragment>
                </VisibilitySensor>
            </div>
        </LayoutDefault>
    );
};

export default HomeRevolutionary;