import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CallContentVertical from "../../../components/call-to-action/CallContentVertical";

const CallToActionVerticalOne = ({bgColor, bgImage}) => {
    return (
        <div className="brook-call-to-action ptb--120 ptb-md--80 ptb-sm--60"
             style={{backgroundColor: bgColor, backgroundImage: `url(${bgImage})`}}
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12}>
                        <CallContentVertical
                            heading="Vertical solid #1"
                            headingColor="#fff"
                            btnText="Find out More"
                            btnLink={'/'}
                            btnClasses="bk-btn-white text-theme btn-sd-size btn-rounded"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToActionVerticalOne;