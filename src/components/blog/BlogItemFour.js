import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const BlogItemFour = ({data, className}) => {
    return (
        <div className={`blog-grid blog-grid--modern blog-standard ${className}`}>
            <div className="post-thumb">
                <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                    <img src={require('../../assets/img/blog/architecture/' + data.thumb)} alt={data.title}/>
                </Link>
            </div>
            <div className="post-content text-center">
                <div className="post-inner">
                    <div className="post-meta mb--10">
                        <div className="post-date">{data.meta.postDate}</div>
                        <div className="post-category">
                            <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.meta.category}</Link></div>
                    </div>
                    <h5 className="heading heading-h5 line-height-1-39">
                        <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.title}</Link>
                    </h5>
                    <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`} className="post-read-more">&nbsp;</Link>
                </div>
            </div>
        </div>
    );
};

BlogItemFour.propTypes = {
    data: PropTypes.object
};

export default BlogItemFour;
