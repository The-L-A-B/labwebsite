import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Article from "./elements/Article";
import Navigation from "./elements/Navigation";
import Comments from "./elements/Comments";
import CommentForm from "./elements/CommentForm";
import Sidebar from "../sidebar";

const BlogDetailsContainer = ({sidebar}) => {
    return (
        <div className="brook-blog-details-area bg_color--1 pt--90 pb--150">
            <Container>
                <Row>
                    <Col lg={8} className={!sidebar ? 'mx-auto' : null}>
                        <div className="blog-details-wrapper">
                            <Article/>
                            <Navigation/>
                            <Comments/>
                            <CommentForm/>
                        </div>
                    </Col>

                    {sidebar && (
                        <Col lg={4} className="mt_md--60 mt_sm--60">
                            <Sidebar/>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default BlogDetailsContainer;
