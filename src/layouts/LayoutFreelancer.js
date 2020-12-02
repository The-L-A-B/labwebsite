import React from 'react';
import {Col, Row} from "react-bootstrap";
import About from "../container/about-us/AboutFreelancer";
import Blogs from "../container/blog/homes/BlogFive";
import Contact from "../container/contact/ContactThree";
import Portfolios from "../container/portfolio/homes/PortfolioSix";

const LayoutFreelancer = () => {
    return (
        <main className="page-content">
            <div className="freelancer-wrapper bg_image--27">
                <Row>
                    <Col lg={6}>
                        <div className="freelancer-left">
                            <About/>
                            <Blogs/>
                            <Contact/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="freelancer-right pb--100">
                            <Portfolios/>
                        </div>
                    </Col>
                </Row>
            </div>
        </main>
    );
};

export default LayoutFreelancer;
