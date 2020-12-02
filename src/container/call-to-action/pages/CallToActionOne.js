import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CallToActionContent from "../../../components/call-to-action/CallContent";
import CallToActionButton from "../../../components/call-to-action/CallButton";

const CallToActionOne = ({bgColor, bgImage}) => {
    return (
        <div className="brook-call-to-action ptb--70"
             style={{backgroundColor: bgColor, backgroundImage: `url(${bgImage})`}}
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={8} className={'wow move-up'}>
                        <CallToActionContent textColor="#fff">
                            Start working together?
                        </CallToActionContent>
                    </Col>
                    <Col xs={12} md={4} className={'wow move-up'}>
                        <CallToActionButton className="bk-btn-white text-theme btn-sd-size btn-rounded">
                            Find Out More
                        </CallToActionButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToActionOne;