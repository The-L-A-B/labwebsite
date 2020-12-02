import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import socialIcons from '../../data/socials';
import SocialIconItem from "../../components/social-icon";

const SocialIconOne = () => {

    let journalEntries = [];

    for (let i = 0; i < socialIcons.length; i++) {
        journalEntries.push(
            <Fragment style={{textTransform: 'capitalize'}}>{socialIcons[i].media}</Fragment>
        );
    }

    return (
        <div className={"brook-social-icon bg_color--3 ptb--80 ptb-sm--60"}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <ul className="social-icon icon-size-large text-center tooltip-layout">
                            {socialIcons.map(icon => (
                                <SocialIconItem
                                    key={icon.id}
                                    data={icon}
                                    type={'icon'}
                                    socialMedia={icon.media}
                                    username={icon.username}
                                    className={"link hint--bounce hint--top hint--white"}
                                />
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialIconOne;
