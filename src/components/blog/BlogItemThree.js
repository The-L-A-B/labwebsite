import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const BlogItemThree = ({data}) => {
    return (
        <div className="blog-grid blog-standard grid-simple">
            <div className="post-thumb">
                <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                    <img src={require('../../assets/img/blog/grid/' + data.thumb)} alt={data.title}/>
                </Link>
            </div>
            <div className="post-content text-center">
                <div className="post-inner">
                    <div className="post-meta">
                        <div className="post-date">{data.meta.postDate}</div>
                        <div className="post-category"><Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.meta.category}</Link></div>
                    </div>
                    <h5 className="heading heading-h5"><Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.title}</Link></h5>
                </div>
            </div>
        </div>
    );
};

BlogItemThree.propTypes = {
    data: PropTypes.object
};

export default BlogItemThree;
