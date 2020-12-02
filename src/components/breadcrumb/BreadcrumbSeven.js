import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const BreadcrumbSeven = ({className, title}) => {
    return (
        <div className={`breadcrumb-area breadcrumb-title-bar pt--130 pb--50 ${className}`}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="breadcrumb-inner text-center">
                            <h1 className="heading heading-h1">{title}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreadcrumbSeven;
