import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SectionTitleOne from "../../../components/section-title/SectionTitleOne";
import ClientLogoItem from "../../../components/client-logo/ClientLogoItemOne";
import clients from "../../../data/client-logo"

const ClientLogoTwo = () => {
    return (
        <div className="bk-brand-area bg_color--1 ptb--90 ptb-md--80 ptb-sm--80">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="brand-inner">
                            <SectionTitleOne
                                heading="Company Clients"
                                separator={true}
                                separatorColor={'red'}
                                wrapperClass={'text-left'}
                            />

                            <div className="bk-separator--45"/>
                            <h6 className="heading heading-h6 font-16 line-height-1-88 font-medium body-color">
                                Our quality of service assessment involves controlling and managing resources by
                                setting priorities for specific types of clients and projects on the system.
                            </h6>
                            <div className="bk-separator--35"/>
                            <div className="brand-btn">
                                <a className="more-details-btn red-color" href={`${process.env.PUBLIC_URL + '/'}`}>
                                    Work with us
                                    <i className="fa fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={{span: 6, offset: 1}} className="mt_sm--40 mt_md--40">
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

export default ClientLogoTwo;
