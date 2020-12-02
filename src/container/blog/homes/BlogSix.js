import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleFour";
import blogs from '../../../data/blog';
import BlogItem from "../../../components/blog/BlogItemSix";

const BlogSix = () => {
    return (
        <div className="bk-blog-grid-area pt--150 pt_md--80 pt_sm--60 bg-shape">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            title={"BLOG UPDATES"}
                            heading={"Latest and greatest post"}
                            className="text-white"
                            wrapperClass={'mb--70 white-text'}
                            center={true}
                        />
                    </Col>
                </Row>

                <Row className="mt--n30">
                    {blogs.slice(0,3).map(blog=>(
                        <Col sm={6} lg={4} key={blog.id}>
                            <BlogItem
                                data={blog}
                                className={'text-white'}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BlogSix;
