import React from 'react';
import clients from "../../../data/client-logo";
import ClientLogoItem from "../../../components/client-logo/ClientLogoItemOne";
import {Container, Row, Col} from "react-bootstrap";

const ClientLogoThree = () => {
    return (
        <div className="bk-brand-area bg_color--1 pb--150 pb_md--80 pb_sm--60">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="brand-wrapper">
                            <div className="brand__list brand-default brand-style--2 no-border">
                                {clients.slice(0,6).map(client => (
                                    <ClientLogoItem key={client.id} clientLogo={client.logo}/>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientLogoThree;
