import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import PopupVideo from "../../components/popup-video";
import iconFeatureData from '../../data/icon-features';
import IconListItemOne from "../../components/icon-list/IconListItemOne";
import motivationalThumb from '../../assets/img/about/home-digital-agency-image-01.png';

const MotivationalArchive = () => {
    return (
        <div className="bk-motivational-archive bg_image--7 digital-motivational plr_md--30 plr_sm--30 plr_lg--30">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="comp-video line--between mb--30">
                            <PopupVideo
                                isThumb={false}
                                watchText={'Watch Video'}
                                channel={'youtube'}
                                videoId={'9No-FiEInLA'}
                                gradient={false}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Row className="align-items-center">
                <Col md={6}>
                    <div className="motivational-wrap">
                        <div className="motivational-inner">
                            <h3 className="title">We're motivated by the desire to achieve.</h3>

                            <div className="content mt--70">
                                <div className="motivational-wrapper mt--n30">
                                    {iconFeatureData.map(iconFeature=>(
                                        <IconListItemOne key={iconFeature.id} data={iconFeature}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={6}>
                    <div className="motivational-thumbnail">
                        <img src={motivationalThumb} alt="Multipurpose"/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MotivationalArchive;
