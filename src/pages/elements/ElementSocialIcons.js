import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-34.jpg";
import SocialIconOne from "../../container/social-icon/SocialIconOne";
import SocialIconTwo from "../../container/social-icon/SocialIconTwo";
import SocialIconThree from "../../container/social-icon/SocialIconThree";
import SocialIconFour from "../../container/social-icon/SocialIconFour";
import SocialIconFive from "../../container/social-icon/SocialIconFive";
import SocialIconSix from "../../container/social-icon/SocialIconSix";
import SocialIconSeven from "../../container/social-icon/SocialIconSeven";
import Footer from "../../container/footer/FooterOne";

const ElementSocialIcons = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Social Icons"
                bg={breadcrumbBg}
            />
            <SocialIconOne/>
            <SocialIconTwo/>
            <SocialIconThree/>
            <SocialIconFour/>
            <SocialIconFive/>
            <SocialIconSix/>
            <SocialIconSeven/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementSocialIcons;