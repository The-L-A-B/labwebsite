import React from 'react';
import Input from "../../../components/input";
import Button from "../../../components/button";

const CommentForm = () => {
    return (
        <div className="comment-form-wrapper">
            <div className="header wow move-up">
                <h4 className="heading heading-h4">Leave A Comment</h4>
                <div className="comment-note mt--20 mb--30">
                    <p className="bk_pra">Your email address will not be published. Required fields are marked </p>
                </div>
            </div>

            <div className="contact-form wow move-up">
                <form action="/">
                    <div className="form-inputs">
                        <Input
                            type="text"
                            placeholder="Name *"
                            required={true}
                        />

                        <Input
                            type="email"
                            placeholder="Email *"
                            required={true}
                            className="mt--30"
                        />

                        <Input
                            type="url"
                            placeholder="Website"
                            required={false}
                            className="mt--30"
                        />

                        <Input
                            type="textarea"
                            placeholder="Your Comment *"
                            required={true}
                            className="mt--30"
                        />

                        <div className="blog-btn mt--30">
                            <Button
                                type="button"
                                btnText="Post Comment"
                                color="theme"
                                size="sd"
                                btnStyle="rounded"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
