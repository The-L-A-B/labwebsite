import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-29.jpg";
import CountdownClockOne from "../../container/countdown-clock/CountdownClockOne";
import CountdownClockTwo from "../../container/countdown-clock/CountdownClockTwo";
import CountdownClockThree from "../../container/countdown-clock/CountdownClockThree";
import CountdownClockFour from "../../container/countdown-clock/CountdownClockFour";
import Footer from "../../container/footer/FooterOne";

const ElementCountdownClock = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Countdown Clock"
                bg={breadcrumbBg}
            />
            <CountdownClockOne/>
            <CountdownClockTwo/>
            <CountdownClockThree/>
            <CountdownClockFour/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementCountdownClock;