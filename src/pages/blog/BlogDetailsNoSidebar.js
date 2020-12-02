import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import BlogDetailsContent from "../../container/blog-details";
import Footer from "../../container/footer/FooterOne";

const BlogDetailsNoSidebar = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Blog Details No Sidebar || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <BlogDetailsContent sidebar={false}/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default BlogDetailsNoSidebar;
