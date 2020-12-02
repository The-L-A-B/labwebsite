import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PopupVideo from "../../components/popup-video";
import videoPopupThumb from '../../assets/img/others/popup-video.jpg';

const PopupVideoWithThumb = () => {
    return (
        <div className="brook-video-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col xs={12}>
                        <PopupVideo
                            isThumb={true}
                            thumb={videoPopupThumb}
                            channel={'youtube'}
                            videoId={'9No-FiEInLA'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopupVideoWithThumb;
