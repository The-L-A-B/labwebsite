import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderTwo";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "../../assets/img/bg/bg-image-8.jpg";
import Blogs from "../../container/blog/pages/BlogContainer";
import Footer from "../../container/footer/FooterOne";

const BlogWithoutSidebar = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Blog || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                    title="Blog"
                    bg={breadcrumbBg}
                />
                <Blogs
                    sidebar={false}
                />
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default BlogWithoutSidebar;
