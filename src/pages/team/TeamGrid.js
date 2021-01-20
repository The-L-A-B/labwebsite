import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import LayoutDefault from '../../layouts/LayoutDefault';
import Header from '../../components/header/HeaderEight';
import TeamMembers from '../../container/team-member/pages/TeamMemberGrid';
import CallToAction from '../../container/call-to-action/pages/CallToActionTwo';
import Footer from '../../container/footer/FooterOne';

const TeamGrid = () => {
  return (
    <Fragment>
      <Helmet>
        <title>The L.A.B. Members</title>
      </Helmet>

      <LayoutDefault className='template-color-1 template-font-1'>
        <Header />
        <TeamMembers />
        <CallToAction bgColor='#fff' />
        <Footer />
      </LayoutDefault>
    </Fragment>
  );
};

export default TeamGrid;
