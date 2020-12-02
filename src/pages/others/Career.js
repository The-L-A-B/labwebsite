import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "../../assets/img/bg/bg-image-56.jpg";
import CareerPosts from "../../container/career/CareerPosts";
import Footer from "../../container/footer/FooterOne";

const Career = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Career || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-font-1 template-color-1">
                <Header/>
                <Breadcrumb
                    bgImg={breadcrumbBg}
                    title="Join our team!"
                    opacityColor="#000"
                />
                <CareerPosts/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default Career;
