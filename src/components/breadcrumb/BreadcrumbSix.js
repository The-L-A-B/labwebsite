import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const BreadcrumbSix = ({title, heading,text}) => {
    return (
        <div className="brook-breadcrumb-area bg_image--16 ptb--270 pt_md--190 pb_md--100 pt_sm--190 pb_sm--100 breadcrumb-title-bar position-relative">
            <div className="overlay" style={{backgroundColor:"#000", opacity:0.8}} />
            <Container>
                <Row>
                    <Col>
                        <div className="breadcrumb-inner text-center">
                            <h6 className="heading heading-h6 text-white" dangerouslySetInnerHTML={{__html:title}}/>
                            <div className="bk-separator--30"/>
                            <h1 className="heading heading-h1 text-white line-height-1 font-80" dangerouslySetInnerHTML={{__html: heading}}/>
                            <div className="bk-separator--30"/>
                            <h5 className="heading heading-h5 text-white line-height-1-95" dangerouslySetInnerHTML={{__html: text}} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreadcrumbSix;
