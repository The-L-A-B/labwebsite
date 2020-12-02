import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CallToActionContent from "../../../components/call-to-action/CallContent";
import CallToActionButton from "../../../components/call-to-action/CallButton";

const CallToActionHorizontalThree = ({bgColor, bgImage}) => {
    return (
        <div className="brook-call-to-action ptb--70"
             style={{backgroundColor: bgColor, backgroundImage: `url(${bgImage})`}}
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={6}>
                        <CallToActionContent textColor="#000">
                            Horizontal solid #3
                        </CallToActionContent>
                    </Col>
                    <Col xs={12} sm={6}>
                        <CallToActionButton className="bk-btn-theme btn-sd-size btn-rounded">
                           Find out More
                        </CallToActionButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToActionHorizontalThree;