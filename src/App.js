import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './helper/scrollToTop';
import WOW from 'wowjs';

import BlogWithoutSidebar from './pages/blog/BlogWithoutSidebar';
import PortfolioWithCaption from './pages/portfolios/PortfolioWithCaption';
import Error from './pages/others/Error';
import Career from './pages/others/Career';
import ComingSoon from './pages/others/ComingSoon';
import Maintenance from './pages/others/Maintenance';
import TeamCarousel from './pages/team/TeamCarousel';
import TeamGrid from './pages/team/TeamGrid';
import PricingTableTwo from './pages/pricing/PricingTableTwo';
import PricingTableOne from './pages/pricing/PricingTableOne';
import ContactClassic from './pages/contact/ContactClassic';
import ServiceModern from './pages/service/ServiceModern';
import ServiceClassic from './pages/service/ServiceClassic';
import AboutPageThree from './pages/about/AboutPageThree';
import ElementList from './pages/elements/ElementList';
import ElementTypedText from './pages/elements/ElementTypedText';
import ElementButton from './pages/elements/ElementButton';
import ElementAccordion from './pages/elements/ElementAccordion';
import ElementMessageBox from './pages/elements/ElementMessageBox';
import ElementPopupVideo from './pages/elements/ElementPopupVideo';
import ElementGallery from './pages/elements/ElementGallery';
import ElementLightweightSlider from './pages/elements/ElementLightweightSlider';
import ElementGradation from './pages/elements/ElementGradation';
import ElementSocialIcons from './pages/elements/ElementSocialIcons';
import ElementMaps from './pages/elements/ElementMaps';
import ElementForms from './pages/elements/ElementForms';
import ElementTabs from './pages/elements/ElementTabs';
import ElementTestimonial from './pages/elements/ElementTestimonial';
import ElementIconBox from './pages/elements/ElementIconBox';
import ElementProgressbar from './pages/elements/ElementProgressbar';
import ElementCounter from './pages/elements/ElementCounter';
import ElementCountdownClock from './pages/elements/ElementCountdownClock';
import ElementInstagramFeed from './pages/elements/ElementInstagramFeed';
import ElementCallToAction from './pages/elements/ElementCallToAction';
import ElementPricingTable from './pages/elements/ElementPricingTable';
import ElementTeamMember from './pages/elements/ElementTeamMember';
import ElementCarouselSlider from './pages/elements/ElementCarouselSlider';
import ElementFlexibleImageSlider from './pages/elements/ElementFlexibleImageSlider';
import ElementClientLogo from './pages/elements/ElementClientLogo';
import HomeDesignStudio from './pages/homes/HomeDesignStudio';

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + '/blog'}`}
            component={BlogWithoutSidebar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/projects'}`}
            component={PortfolioWithCaption}
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
            path={`${process.env.PUBLIC_URL + '/members'}`}
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
            path={`${process.env.PUBLIC_URL + '/about'}`}
            component={AboutPageThree}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/list'}`}
            component={ElementList}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/typed-text'}`}
            component={ElementTypedText}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/button'}`}
            component={ElementButton}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/accordion'}`}
            component={ElementAccordion}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/message-box'}`}
            component={ElementMessageBox}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/popup-video'}`}
            component={ElementPopupVideo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/gallery'}`}
            component={ElementGallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/lightweight-slider'}`}
            component={ElementLightweightSlider}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/gradation'}`}
            component={ElementGradation}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/social-icon'}`}
            component={ElementSocialIcons}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/map'}`}
            component={ElementMaps}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/form'}`}
            component={ElementForms}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/tab'}`}
            component={ElementTabs}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/testimonial'}`}
            component={ElementTestimonial}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/icon-box'}`}
            component={ElementIconBox}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/progressbar'}`}
            component={ElementProgressbar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/counter'}`}
            component={ElementCounter}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/countdown-clock'}`}
            component={ElementCountdownClock}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/instagram-feed'}`}
            component={ElementInstagramFeed}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/call-to-action'}`}
            component={ElementCallToAction}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/pricing-table'}`}
            component={ElementPricingTable}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/team-member'}`}
            component={ElementTeamMember}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/carousel-slider'}`}
            component={ElementCarouselSlider}
          />
          <Route
            path={`${
              process.env.PUBLIC_URL + '/element/flexible-image-slider'
            }`}
            component={ElementFlexibleImageSlider}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/element/client-logo'}`}
            component={ElementClientLogo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/'}`}
            component={HomeDesignStudio}
          />
          <Route exact component={Error} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
