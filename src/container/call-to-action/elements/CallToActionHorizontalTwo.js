import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CallToActionContent from "../../../components/call-to-action/CallContent";
import CallToActionButton from "../../../components/call-to-action/CallButton";

const CallToActionHorizontalTwo = ({bgColor, bgImage}) => {
    return (
        <div className="brook-call-to-action ptb--70"
             style={{backgroundColor: bgColor, backgroundImage: `url(${bgImage})`}}
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={6}>
                        <CallToActionContent textColor="#ffffff">
                            Horizontal solid #2
                        </CallToActionContent>
                    </Col>
                    <Col xs={12} sm={6}>
                        <CallToActionButton className="bk-btn-white text-theme btn-sd-size btn-rounded">
                            Read More
                        </CallToActionButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToActionHorizontalTwo;