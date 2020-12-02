import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import JobItem from "../../components/job";
import jobPosts from "../../data/job";

const CareerPosts = () => {
    return (
        <div className="brook-career-area pb--70 space_dec--100 pt_md--70 pt_sm--70">
            <Container>
                <Row>
                    {jobPosts.map(job => (
                        <Col key={job.id} md={6} className="mb--35 wow move-up">
                            <JobItem data={job}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CareerPosts;