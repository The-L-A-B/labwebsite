import React from 'react';
import {Col, Row} from "react-bootstrap";
import SectionTitle from "../../components/section-title/SectionTitleFour";
import Instagram from "../../components/instagram";
import instagramFeedData from '../../data/instagram';

const InstagramFeedTwo = () => {
    return (
        <div className="brook-instagram-feed-area plr--100 plr_lg--30 plr_md--30 plr_sm--30">
            <Row>
                <Col xs={12}>
                    <SectionTitle
                        title={"LET’S WORK TOGETHER"}
                        heading={"brookstudio@Brook.com"}
                        className="text-white"
                        wrapperClass={'mb--70 white-text revulutionlink'}
                        center={true}
                    />
                </Col>

                <Col xs={12}>
                    <div className="bk-instagram-list instagram-grid">
                        <div className="instagram-grid-wrap instagram-grid-5 move-up wow">
                            {instagramFeedData.map(instagram=>(
                                <Instagram
                                    key={instagram.id}
                                    data={instagram}
                                    variant={'grid-style--1'}
                                />
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default InstagramFeedTwo;
