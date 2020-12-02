import React from 'react';

import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-13.jpg";
import CallToActionHorizontalOne from "../../container/call-to-action/elements/CallToActionHorizontalOne";
import CallToActionHorizontalTwo from "../../container/call-to-action/elements/CallToActionHorizontalTwo";
import CallToActionHorizontalThree from "../../container/call-to-action/elements/CallToActionHorizontalThree";
import CallToActionHorizontalFour from "../../container/call-to-action/elements/CallToActionHorizontalFour";
import callToActionFourBg from '../../assets/img/bg/bg-image-9.jpg';
import CallToActionVerticalOne from "../../container/call-to-action/elements/CallToActionVerticalOne";
import CallToActionVerticalTwo from "../../container/call-to-action/elements/CallToActionVerticalTwo";
import CallToActionVerticalThree from "../../container/call-to-action/elements/CallToActionVerticalThree";
import callToActionVerticalThreeBg from '../../assets/img/bg/bg-image-10.jpg';
import Footer from "../../container/footer/FooterOne";

const ElementCallToAction = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Call to Action"
                bg={breadcrumbBg}
            />
            <CallToActionHorizontalOne bgColor="#000000" bgImage={null}/>
            <CallToActionHorizontalTwo bgColor="#0038E3" bgImage={null}/>
            <CallToActionHorizontalThree bgColor='#ffffff' bgImage={null}/>
            <CallToActionHorizontalFour bgImage={callToActionFourBg} bgColor={null}/>
            <CallToActionVerticalOne bgColor='#000000' bgImage={null}/>
            <CallToActionVerticalTwo bgColor='#0038E3' bgImage={null}/>
            <CallToActionVerticalThree bgImage={callToActionVerticalThreeBg} bgColor={null} overlayColor={'#000'} overlayOpacity={0.8}/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementCallToAction;