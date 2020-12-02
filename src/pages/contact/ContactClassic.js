import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-54.jpg";
import ContactInfo from "../../container/contact/ContactInfoOne";
import ContactForm from "../../container/contact/ContactFive";
import Footer from "../../container/footer/FooterOne";

const ContactClassic = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Contact Us || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                    title="Contact"
                    bg={breadcrumbBg}
                />
                <ContactInfo/>
                <ContactForm/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default ContactClassic;