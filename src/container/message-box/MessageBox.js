import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MessageBoxItem from "../../components/message-box";

const MessageBox = () => {
    return (
        <div className="bk-message-box-area ptb--150 ptb-md--80 ptb-sm--60  bg_color--1">
            <Container>
                <Row className={'mt--n30'}>
                    <Col lg={6}>
                        <MessageBoxItem
                            type={'light'}
                            content={'Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.'}
                        />
                    </Col>

                    <Col lg={6}>
                        <MessageBoxItem
                            type={'danger'}
                            content={'Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.'}
                        />
                    </Col>

                    <Col lg={6}>
                        <MessageBoxItem
                            type={'success'}
                            content={'Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.'}
                        />
                    </Col>

                    <Col lg={6}>
                        <MessageBoxItem
                            type={'primary'}
                            content={'Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MessageBox;
