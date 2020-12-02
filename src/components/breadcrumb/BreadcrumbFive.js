import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const BreadcrumbFive = ({title}) => {
    return (
        <div className="breadcrumb-area bg_image--13 ptb--270 ptb-md--150 ptb-sm--150 breadcrumb-title-bar breadcrumb-title-white">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="breadcrumb-inner text-center mt_sm--50 mt_md--50">
                            <h1 className="heading heading-h1 text-white"
                                dangerouslySetInnerHTML={{__html: title}}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreadcrumbFive;
