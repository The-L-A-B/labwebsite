import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import socialIcons from '../../data/socials';
import SocialIconItem from "../../components/social-icon";

const SocialIconThree = () => {
    return (
        <div className={"brook-social-icon bg_color--3 ptb--80 ptb-sm--60"}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <ul className="social-icon icon-size-medium text-center tooltip-layout">
                            {socialIcons.map(icon=>(
                                <SocialIconItem
                                    key={icon.id}
                                    type={'icon'}
                                    socialMedia={icon.media}
                                    username={icon.username}
                                    className={"link hint--bounce hint--top hint--theme"}
                                />
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialIconThree;
