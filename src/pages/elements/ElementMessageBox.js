import React from 'react';
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-31.jpg";
import MessageBox from "../../container/message-box/MessageBox";
import Footer from "../../container/footer/FooterOne";

const ElementMessageBox = () => {
    return (
        <LayoutDefault className="template-color-1 template-font-1">
            <Header/>
            <Breadcrumb
                title="Message Boxes"
                bg={breadcrumbBg}
            />
            <MessageBox/>
            <Footer/>
        </LayoutDefault>
    );
};

export default ElementMessageBox;