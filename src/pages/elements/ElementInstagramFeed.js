import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-21.jpg";
import InstagramFeedOne from "../../container/instagram-feed/InstagramFeedOne";
import Footer from "../../container/footer/FooterOne";

const ElementInstagramFeed = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Instagram Feed"
                bg={breadcrumbBg}
            />
            <InstagramFeedOne/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementInstagramFeed;