import React from 'react';
import {Accordion, Container, Row, Col} from 'react-bootstrap'
import AccordionItem from "../../components/accordion/AccordionItem";
import accordionContent from "../../data/accordion";

const AccordionTwo = () => {
    return (
        <div className="bk-accordion-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        <Accordion defaultActiveKey="1" className={'bk-accordion-style--2'}>
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
                </Row>
            </Container>
        </div>
    );
};

export default AccordionTwo;
