import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleFour";
import ClientLogoItem from "../../../components/client-logo/ClientLogoItemTwo";
import clientLogos from '../../../data/client-logo';

const ClientLogoFour = () => {
    return (
        <div className="brook-brand-area bg-shape ptb--150 ptb-md--80 ptb-sm--60">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            title={"LOVELY CLIENTS"}
                            heading={null}
                            className="text-white"
                            wrapperClass={'mb--70 white-text'}
                            center={true}
                        />
                    </Col>

                    <Col xs={12}>
                        <div className="social-client wow move-up">
                            {clientLogos.map(logo=>(
                                <ClientLogoItem
                                    key={logo.id}
                                    clientLogo={logo.logo}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientLogoFour;
