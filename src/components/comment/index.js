import React from 'react';
import Thumbnail from "../about-us/thumbnail/AboutThumbOne";

const Comment = ({authorPic, author, quote, commentDate, reply, className}) => {
    return (
        <div className={`comment ${reply ? 'comment-reply' : ''} ${className}`}>
            <Thumbnail thumb={authorPic}/>

            <div className="content">
                <h6 className="heading heading-h6">{author}</h6>
                <div className="text mt--10 pr--50 pr_sm--5">
                    <p className="bk_pra">{quote}</p>
                </div>
                <div className="comment-footer mt--10">
                    <span>{commentDate}</span>
                    <span className="reply-btn">
                        <a href={process.env.PUBLIC_URL + '/blog-details'}>Reply</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Comment;
