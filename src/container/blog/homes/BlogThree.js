import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import blogs from '../../../data/blog'
import BlogItem from "../../../components/blog/BlogItemThree";

const BlogThree = () => {
    return (
        <div className="bk-blog-grid-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--80">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            heading={"Sharing your thoughts everyday"}
                            separator={true}
                            separatorColor={'red'}
                            wrapperClass={'text-center'}
                        />
                    </Col>
                </Row>

                <Row className="mt--20">
                    {blogs.slice(0,3).map(blog => (
                        <Col xs={12} md={6} lg={4} className="move-up wow mt--40" key={blog.id}>
                            <BlogItem data={blog}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BlogThree;