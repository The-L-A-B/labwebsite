import React from 'react';
import Comment from "../../../components/comment";
import commentsData from "../../../data/comments";

const Comments = () => {
    return (
        <div className="comments-wrapper">
            <div className="inner">
                <h4 className="heading heading-h4">{commentsData.length} Comments</h4>

                <div className={`comment-list-wrap mt--25`}>
                    {commentsData.map(comment => (
                        <Comment
                            key={comment.id}
                            author={comment.author}
                            authorPic={require('../../../assets/img/blog/client/' + comment.authorPic)}
                            quote={comment.quote}
                            commentDate={comment.commentDate}
                            reply={comment.reply}
                            className="wow move-up"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;
