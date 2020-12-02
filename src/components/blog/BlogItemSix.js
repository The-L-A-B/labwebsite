import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const BlogItemSix = ({data, className}) => {
    return (
        <div className={`blog-grid-minimal minimal-style-2 mt--30 ${className ? className : ''}`}>
            <div className="post-content">
                <div className="post-meta">
                    <div className="post-date">{data.meta.postDate}</div>
                    <div className="post-category">
                        <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.meta.category}</Link>
                    </div>
                </div>
                <h4 className="heading heading-h4 line-height-1-62">
                    <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.title}</Link>
                </h4>
                <div className="post-author">
                    <h6 className="heading heading-h6">{data.meta.author}</h6>
                </div>
            </div>
        </div>
    );
};

BlogItemSix.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string
};

export default BlogItemSix;
