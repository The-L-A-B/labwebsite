import React from 'react';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import accordionContent from "../../data/accordion";
import AccordionItem from "../../components/accordion/AccordionItem";
import Thumbnail from "../../components/about-us/thumbnail/AboutThumbOne";
import thumb from "../../assets/img/about/about-2.jpg"

const WorkTwo = () => {
    return (
        <div className="bk-accordion-area pt--150 pt-md--80 pt-sm--60 bg_color--1 pb--50">
            <Container>
                <Row>
                    <Col md={6} className="order-1 order-lg-0">
                        <div className="brook-section-title mb--50 mb_sm--20 mb_md--20">
                            <h3 className="heading heading-h3">What we do</h3>
                        </div>

                        <Accordion className={'bk-accordion-style--2'}>
                            {accordionContent.map(accordion => (
                                <AccordionItem
                                    key={accordion.id}
                                    eventKey={`${accordion.id}`}
                                    title={accordion.title}
                                    content={accordion.content}
                                />
                            ))}
                        </Accordion>
                    </Col>

                    <Col md={6} className="order-0 order-lg-1 ">
                        <Thumbnail thumb={thumb} className="mb_sm--30"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkTwo;
