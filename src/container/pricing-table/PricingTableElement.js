import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import PricingTableItem from "../../components/pricing-table/PricingTableItem";
import pricingTables from '../../data/prcing-table'
import PricingTableList from "../../components/pricing-table/PricingTableList";

const PricingTableElement = () => {
    return (
        <div className="brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
            <Container>
                <Row>
                    {pricingTables.map(pricing => (
                        <Col key={pricing.id} xs={12} md={6} lg={4}>
                            <PricingTableItem data={pricing}/>
                        </Col>
                    ))}
                </Row>

                <Row className="mt--120 mt-md--80 mt-sm--60">
                    <PricingTableList/>
                </Row>
            </Container>
        </div>
    );
};

export default PricingTableElement;