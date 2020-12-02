import React from 'react';
import {Link} from "react-router-dom";

const BlogItemTwo = ({data, modalShow}) => {
    return (
        <div className="blog blog-style--2 creative--blog">
            <div className="thumb poss_relative">
                <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                    <img src={require('../../assets/img/blog/blog-2/' + data.thumb)} alt={data.title}/>
                </Link>
                {data.videoId && (
                    <div className="video-btn">
                        <button className="video-icon play__btn" onClick={() => modalShow()}/>
                    </div>
                )}
            </div>

            <div className="blog-content">
                <div className="content">
                    <h3 className="the-title"><Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.title}</Link></h3>
                    <ul className="meta">
                        <li>{data.meta.postDate}</li>
                        <li><Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>{data.meta.category}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogItemTwo;
