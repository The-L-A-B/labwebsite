import React, {Fragment, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SectionTitleTwo from "../../../components/section-title/SectionTitleTwo";
import BlogItemOne from "../../../components/blog/BlogItemOne";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import blogWrapperBg from "../../../assets/img/bg/bg-image-4.jpg";
import blogContent from "../../../data/blog";

const BlogOne = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        setIsOpen(true);
    }

    return (
        <div className="bk-blog-area">
            <div className="black-bg-wrapper section-pt-xl pb--320" style={{backgroundImage: `url(${blogWrapperBg})`}}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <SectionTitleTwo
                                className={"white-text"}
                                center={true}
                                title={"LATEST NEWS"}
                                heading={"From our blogs."}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div
                className="blog-wrapper pl--230 pr--230 pr_lp--100 pl_lp--100 pl_lg--100 pr_lg--100 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30 section-pb-xl">
                <Row className="row--0 space_dec--250">
                    {blogContent.slice(0, 3).map(blog => (
                        <Fragment key={blog.id}>
                            {blog.videoId && (
                                <ModalVideo
                                    channel="youtube"
                                    videoId={blog.videoId}
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            )}
                            <Col xs={12} sm={6} xl={4} className="wow move-up">
                                <BlogItemOne data={blog} modalShow={openModal}/>
                            </Col>
                        </Fragment>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default BlogOne;
