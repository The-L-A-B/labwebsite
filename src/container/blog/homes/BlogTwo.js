import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import BlogItem from "../../../components/blog/BlogItemTwo";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import blogContent from "../../../data/blog";

const BlogTwo = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        setIsOpen(true);
    }

    return (
        <div className="bk-blog-area section-ptb-120 clearfix">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="section-title--between wow move-up">
                            <div className="title">
                                <h3>Blog <span className="theme-creative">Updates</span></h3>
                            </div>
                            <div className="section-btn mt_mobile--30">
                                <Link className="button-text"
                                   to={`${process.env.PUBLIC_URL + '/blog'}`}><span>View all posts</span>
                                    <i className="fa fa-arrow-right"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="row mt--40">
                    {blogContent.slice(0, 4).map(blog => (
                        <Fragment key={blog.id}>
                            {blog.videoId && (
                                <ModalVideo
                                    channel="youtube"
                                    videoId={blog.videoId}
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            )}
                            <Col xs={12} sm={6} xl={3} className="wow move-up mt--30">
                                <BlogItem data={blog} modalShow={openModal}/>
                            </Col>
                        </Fragment>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BlogTwo;
