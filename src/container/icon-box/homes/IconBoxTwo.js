import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleFour";
import iconBoxContent from "../../../data/icon-box/IconBoxOne.json";
import IconBoxItem from "../../../components/icon-box/IconBoxItemOne";

const IconBoxTwo = () => {
    return (
        <div className="brook-icon-boxes-area plr--100 plr_lg--50 plr_md--50 plr_sm--5">
            <div className="ptb--150 ptb-md--80 ptb-sm--80 bg_color--15">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <SectionTitle
                                title={"REASONS WHY"}
                                heading={"We're trusted by clients."}
                                className="theme-color"
                                wrapperClass={'mb--45'}
                                center={true}
                            />
                        </Col>
                    </Row>

                    <Row className="mt--30">
                        {iconBoxContent.map(iconBox => (
                            <Col xs={12} sm={6} lg={4} className="wow move-up" key={iconBox.id}>
                                <IconBoxItem
                                    data={iconBox}
                                    border={false}
                                    padding={false}
                                    showBtn={false}
                                    className="bg-transparent"
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default IconBoxTwo;
