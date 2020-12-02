import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PopupVideo from "../../components/popup-video";

const PopupVideoButtons = () => {
    return (
        <div className="brook-video-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col xs={12}>
                        <PopupVideo
                            isThumb={false}
                            watchText={'Watch Video'}
                            channel={'youtube'}
                            videoId={'9No-FiEInLA'}
                            gradient={false}
                        />

                        <div className="mt--100">
                            <PopupVideo
                                isThumb={false}
                                watchText={'See Video'}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                                iconStyleClass={'second-icon'}
                                gradient={false}
                            />
                        </div>

                        <div className="mt--100">
                            <PopupVideo
                                isThumb={false}
                                watchText={'See Video'}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                                iconStyleClass={'third-icon'}
                                gradient={false}
                            />
                        </div>

                        <div className="line--between mt--100">
                            <PopupVideo
                                isThumb={false}
                                watchText={'Watch Video'}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                                gradient={false}
                            />
                        </div>

                        <div className="mt--100 text-center">
                            <PopupVideo
                                isThumb={false}
                                watchText={'Watch Video'}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                                gradient={true}
                                gradientClass={null}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopupVideoButtons;
