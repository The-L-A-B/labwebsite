import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const BreadcrumbTwo = ({title, bgImg, bgColor, opacityColor}) => {
    return (
        <div
            className="breadcrumb-area ptb--270 breadcrumb-title-bar breadcrumb-title-white position-relative"
            style={{backgroundImage: `url(${bgImg})`, backgroundColor: bgColor ? bgColor : '#fff'}}
        >
            {opacityColor && <div className="overlay" style={{backgroundColor: opacityColor, opacity: 0.7}}/>}
            <Container>
                <Row>
                    <Col lg={10} className="m-auto">
                        <div className="breadcrumb-inner text-center">
                            <h1 className="heading heading-h1 text-white">{title}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreadcrumbTwo;