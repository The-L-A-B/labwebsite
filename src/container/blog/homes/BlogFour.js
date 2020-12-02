import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import blogs from '../../../data/blog';
import BlogItem from "../../../components/blog/BlogItemFour";

const BlogFour = () => {
    return (
        <div className="bk-blog-grid-area ptb--130 ptb-md--80 ptb-sm--60 bg_color--5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} xl={6}>
                        <SectionTitle
                            heading={"Blog Updates"}
                        />
                    </Col>

                    <Col lg={7} xl={6} className="text-md-right">
                        <div className="blog-btn view-more-btn heading-color font-700 mt_sm--30">
                            <a href={`${process.env.PUBLIC_URL + '/'}`}>
                                <span>View all posts</span>
                                <span className="btn-arrow"/>
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {blogs.slice(0, 3).map(blog => (
                        <Col key={blog.id} sm={6} lg={4} className="mt--70">
                            <BlogItem
                                data={blog}
                                className="blog-yellow-color"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BlogFour;
