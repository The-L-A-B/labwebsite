import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const BlogItemFive = ({data, className, modalShow}) => {
    return (
        <div className={`blog-grid blog-standard mb--80 padding-left-none wow move-up hover-yellow-color ${className}`}>
            <div className={`post-thumb ${data.videoId ? 'video-with-thumb': ''}`}>
                <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                    <img src={require('../../assets/img/blog/grid/' + data.thumb)} alt={data.title} />
                </Link>

                {data.videoId && (
                    <div className="video-btn position--center">
                        <button className="video-icon play__btn" onClick={() => modalShow()}/>
                    </div>
                )}
            </div>
            <div className="post-content">
                <div className="post-inner">
                    <h4 className="heading heading-h4 hover-yellow-color">
                        <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.title}</Link>
                    </h4>
                    <div className="post-meta">
                        <div className="post-date">{data.meta.postDate}</div>
                        <div className="post-category hover-yellow-color">
                            <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.meta.category}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogItemFive.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string
};

export default BlogItemFive;