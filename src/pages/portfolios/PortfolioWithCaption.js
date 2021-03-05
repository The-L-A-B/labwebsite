import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import LayoutDefault from '../../layouts/LayoutDefault';
import Header from '../../components/header/HeaderEight';
import Breadcrumb from '../../components/breadcrumb/BreadcrumbSeven';
import Portfolios from '../../container/portfolio/pages/PortfolioCaption';
import Footer from '../../container/footer/FooterOne';

const PortfolioWithCaption = () => {
  return (
    <Fragment>
      <Helmet>
        <title>The L.A.B. Projects</title>
      </Helmet>
      <LayoutDefault className='template-color-1 template-font-1 bg_color--5'>
        <Header />
        <Breadcrumb title='Teammate Projects' />
        <Portfolios wide={false} />
        <Footer />
      </LayoutDefault>
    </Fragment>
  );
};

export default PortfolioWithCaption;
