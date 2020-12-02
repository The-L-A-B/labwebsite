import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollToTop from "./helper/scrollToTop";
import WOW from "wowjs";

import BlogDetailsNoSidebar from "./pages/blog/BlogDetailsNoSidebar";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogRightSidebar from "./pages/blog/BlogRightSidebar";
import BlogLeftSidebar from "./pages/blog/BlogLeftSidebar";
import BlogWithoutSidebar from "./pages/blog/BlogWithoutSidebar";
import PortfolioDetailsModern from "./pages/portfolios/PortfolioDetailsModern";
import PortfolioDetailsRight from "./pages/portfolios/PortfolioDetailsRight";
import PortfolioDetailsLeft from "./pages/portfolios/PortfolioDetailsLeft";
import PortfolioFilterable from "./pages/portfolios/PortfolioFilterable";
import PortfolioAjaxLoading from "./pages/portfolios/PortfolioAjaxLoading";
import PortfolioMasonryWide from "./pages/portfolios/PortfolioMasonryWide";
import PortfolioMasonryBoxed from "./pages/portfolios/PortfolioMasonryBoxed";
import PortfolioMetroBoxed from "./pages/portfolios/PortfolioMetroBoxed";
import PortfolioMetroWide from "./pages/portfolios/PortfolioMetroWide";
import PortfolioWithCaption from "./pages/portfolios/PortfolioWithCaption";
import PortfolioGridWide from "./pages/portfolios/PortfolioGridWide";
import PortfolioGridBoxed from "./pages/portfolios/PortfolioGridBoxed";
import Error from "./pages/others/Error";
import Career from "./pages/others/Career";
import ComingSoon from "./pages/others/ComingSoon";
import Maintenance from "./pages/others/Maintenance";
import TeamCarousel from "./pages/team/TeamCarousel";
import TeamGrid from "./pages/team/TeamGrid";
import PricingTableTwo from "./pages/pricing/PricingTableTwo";
import PricingTableOne from "./pages/pricing/PricingTableOne";
import ContactClassic from "./pages/contact/ContactClassic";
import ServiceModern from "./pages/service/ServiceModern";
import ServiceClassic from "./pages/service/ServiceClassic";
import AboutPageFour from "./pages/about/AboutPageFour";
import AboutPageThree from "./pages/about/AboutPageThree";
import AboutPageTwo from "./pages/about/AboutPageTwo";
import AboutPageOne from "./pages/about/AboutPageOne";
import ElementList from "./pages/elements/ElementList";
import ElementTypedText from "./pages/elements/ElementTypedText";
import ElementButton from "./pages/elements/ElementButton";
import ElementAccordion from "./pages/elements/ElementAccordion";
import ElementMessageBox from "./pages/elements/ElementMessageBox";
import ElementPopupVideo from "./pages/elements/ElementPopupVideo";
import ElementGallery from "./pages/elements/ElementGallery";
import ElementLightweightSlider from "./pages/elements/ElementLightweightSlider";
import ElementGradation from "./pages/elements/ElementGradation";
import ElementSocialIcons from "./pages/elements/ElementSocialIcons";
import ElementMaps from "./pages/elements/ElementMaps";
import ElementForms from "./pages/elements/ElementForms";
import ElementTabs from "./pages/elements/ElementTabs";
import ElementTestimonial from "./pages/elements/ElementTestimonial";
import ElementIconBox from "./pages/elements/ElementIconBox";
import ElementProgressbar from "./pages/elements/ElementProgressbar";
import ElementCounter from "./pages/elements/ElementCounter";
import ElementCountdownClock from "./pages/elements/ElementCountdownClock";
import ElementInstagramFeed from "./pages/elements/ElementInstagramFeed";
import ElementCallToAction from "./pages/elements/ElementCallToAction";
import ElementPricingTable from "./pages/elements/ElementPricingTable";
import ElementTeamMember from "./pages/elements/ElementTeamMember";
import ElementCarouselSlider from "./pages/elements/ElementCarouselSlider";
import ElementFlexibleImageSlider from "./pages/elements/ElementFlexibleImageSlider";
import ElementClientLogo from "./pages/elements/ElementClientLogo";
import HomeVerticalSlidePortfolio from "./pages/homes/HomeVerticalSlidePortfolio";
import HomeMinimalPortfolio from "./pages/homes/HomeMinimalPortfolio";
import HomeCreativePortfolio from "./pages/homes/HomeCreativePortfolio";
import HomeRevolutionary from "./pages/homes/HomeRevolutionary";
import HomeAuthenticStudio from "./pages/homes/HomeAuthenticStudio";
import HomeFreelancer from "./pages/homes/HomeFreelancer";
import HomeMinimalAgency from "./pages/homes/HomeMinimalAgency";
import HomeArchitecture from "./pages/homes/HomeArchitecture";
import HomeDesignStudio from "./pages/homes/HomeDesignStudio";
import HomeDigitalAgency from "./pages/homes/HomeDigitalAgency";
import HomeCreativeAgency from "./pages/homes/HomeCreativeAgency";
import HomeBusiness from "./pages/homes/HomeBusiness";

const App = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-details-no-sidebar'}`}
                        component={BlogDetailsNoSidebar}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-details'}`}
                        component={BlogDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-right-sidebar'}`}
                        component={BlogRightSidebar}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-left-sidebar'}`}
                        component={BlogLeftSidebar}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog'}`}
                        component={BlogWithoutSidebar}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-details-modern'}`}
                        component={PortfolioDetailsModern}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-right-details'}`}
                        component={PortfolioDetailsRight}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-details'}`}
                        component={PortfolioDetailsLeft}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-filterable'}`}
                        component={PortfolioFilterable}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-ajax-loading'}`}
                        component={PortfolioAjaxLoading}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-masonry-wide'}`}
                        component={PortfolioMasonryWide}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-masonry-boxed'}`}
                        component={PortfolioMasonryBoxed}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-metro-boxed'}`}
                        component={PortfolioMetroBoxed}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-metro-wide'}`}
                        component={PortfolioMetroWide}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio'}`}
                        component={PortfolioWithCaption}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-grid-wide'}`}
                        component={PortfolioGridWide}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-grid-boxed'}`}
                        component={PortfolioGridBoxed}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/career'}`}
                        component={Career}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/coming-soon'}`}
                        component={ComingSoon}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/maintenance'}`}
                        component={Maintenance}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/team-carousel'}`}
                        component={TeamCarousel}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/team'}`}
                        component={TeamGrid}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/pricing-table-two'}`}
                        component={PricingTableTwo}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/pricing-table'}`}
                        component={PricingTableOne}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/service-modern'}`}
                        component={ServiceModern}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/service-classic'}`}
                        component={ServiceClassic}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/contact'}`}
                        component={ContactClassic}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-four'}`}
                        component={AboutPageFour}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-three'}`}
                        component={AboutPageThree}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-two'}`}
                        component={AboutPageTwo}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-one'}`}
                        component={AboutPageOne}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/list"}`}
                        component={ElementList}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/typed-text"}`}
                        component={ElementTypedText}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/button"}`}
                        component={ElementButton}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/accordion"}`}
                        component={ElementAccordion}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/message-box"}`}
                        component={ElementMessageBox}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/popup-video"}`}
                        component={ElementPopupVideo}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/gallery"}`}
                        component={ElementGallery}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/lightweight-slider"}`}
                        component={ElementLightweightSlider}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/gradation"}`}
                        component={ElementGradation}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/social-icon"}`}
                        component={ElementSocialIcons}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/map"}`}
                        component={ElementMaps}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/form"}`}
                        component={ElementForms}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/tab"}`}
                        component={ElementTabs}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/testimonial"}`}
                        component={ElementTestimonial}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/icon-box"}`}
                        component={ElementIconBox}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/progressbar"}`}
                        component={ElementProgressbar}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/counter"}`}
                        component={ElementCounter}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/countdown-clock"}`}
                        component={ElementCountdownClock}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/instagram-feed"}`}
                        component={ElementInstagramFeed}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/call-to-action"}`}
                        component={ElementCallToAction}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/pricing-table"}`}
                        component={ElementPricingTable}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/team-member"}`}
                        component={ElementTeamMember}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/carousel-slider"}`}
                        component={ElementCarouselSlider}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/flexible-image-slider"}`}
                        component={ElementFlexibleImageSlider}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/client-logo"}`}
                        component={ElementClientLogo}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-vertical-slide-portfolio'}`}
                        component={HomeVerticalSlidePortfolio}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-minimal-portfolio'}`}
                        component={HomeMinimalPortfolio}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-creative-portfolio'}`}
                        component={HomeCreativePortfolio}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-revolutionary'}`}
                        component={HomeRevolutionary}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-authentic-studio'}`}
                        component={HomeAuthenticStudio}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-freelancer'}`}
                        component={HomeFreelancer}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-minimal-agency'}`}
                        component={HomeMinimalAgency}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-architecture'}`}
                        component={HomeArchitecture}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-design-studio'}`}
                        component={HomeDesignStudio}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-digital-agency'}`}
                        component={HomeDigitalAgency}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-creative-agency'}`}
                        component={HomeCreativeAgency}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/home-business'}`}
                        component={HomeBusiness}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/'}`}
                        component={HomeBusiness}
                    />
                    <Route exact component={Error}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;