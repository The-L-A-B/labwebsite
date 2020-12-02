import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'

const AccordionItem = ({title, eventKey, content}) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="button" eventKey={eventKey} className={'text-left'}>
                    {title}
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>{content}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default AccordionItem;
