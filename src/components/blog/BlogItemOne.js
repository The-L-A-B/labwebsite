import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const BlogItemOne = ({data, modalShow}) => {
    return (
        <Fragment>
            <div className={`blog blog-style--1`}>
                <div className="thumb">
                    <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                        <img src={require('../../assets/img/blog/blog-1/' + data.thumb)} alt={data.title}/>
                    </Link>
                </div>
                <div className="blog-content blog-position--bottom">
                    <div className="content">
                        {data.videoId && (
                            <div className="video-btn">
                                <button className="video-icon play__btn" onClick={() => modalShow()}/>
                            </div>
                        )}
                        <ul className="meta">
                            <li>{data.meta.postDate}</li>
                            <li><a href={`${process.env.PUBLIC_URL + '/'}`}>{data.meta.category}</a></li>
                        </ul>
                        <h3 className="the-title">
                            <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

BlogItemOne.propTypes = {
    data: PropTypes.object
};

export default BlogItemOne;
