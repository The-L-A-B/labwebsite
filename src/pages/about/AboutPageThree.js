import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../container/page';
import Header from '../../components/header/HeaderTwo';
import PopupSearch from '../../components/popup/PopupSearch';
import PopupMobileMenu from '../../components/popup/PopupMobileMenu';
import Breadcrumb from '../../components/breadcrumb/BreadcrumbFour';
import Counter from '../../container/counter/CounterOne';
import FlexibleImageSlider from '../../container/flexible-image-slider/FlexibleImageSliderFour';
import AboutPageArea from '../../container/about-us/AboutPageArea';
import Testimonial from '../../container/testimonial/elements/TestimonialThree';
import Works from '../../container/work/WorkTwo';
import ClientLogos from '../../container/client-logo/homes/ClientLogoOne';
import FooterOne from '../../container/footer/FooterOne';

const AboutPageThree = () => {
  return (
    <Fragment>
      <Helmet>
        <title>About The L.A.B.</title>
      </Helmet>

      <PageContainer
        classes='template-color-1 template-font-1'
        revealFooter={false}
      >
        <Header />
        <PopupSearch />
        <PopupMobileMenu />
        <Breadcrumb title={'Brook is a New York-based creative agency'} />
        <Counter />
        <FlexibleImageSlider />
        <AboutPageArea />
        <Testimonial />
        <Works />
        <ClientLogos />
        <FooterOne />
      </PageContainer>
    </Fragment>
  );
};

export default AboutPageThree;
