import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ClientLogoItem from "../../../components/client-logo/ClientLogoItemOne";
import clientLogos from '../../../data/client-logo';

const ClientLogoTwo = ({wrapClasses, variant}) => {
    return (
        <div className={`bk-brand-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--60 ${wrapClasses ? wrapClasses : ""}`}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="brand-wrapper">
                            <div className={`brand__list brand-default ${variant ? variant : ""}`}>
                                {clientLogos.slice(0,6).map(logo => (
                                    <ClientLogoItem key={logo.id} clientLogo={logo.logo} slideClass="swiper-slide"/>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientLogoTwo;