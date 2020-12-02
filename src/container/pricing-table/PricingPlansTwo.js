import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PricingTableList from "../../components/pricing-table/PricingTableList";

const PricingPlansTwo = () => {
    return (
        <div className="brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <div className="choose-plan-area text-center mb--80 mb_sm--20">
                            <h3 className="heading heading-h3">Choose Your Plan</h3>
                            <div className="desc mt--25">
                                <p className="bk_pra">
                                    If you are unsure which pricing plan to choose, then register
                                    for a 14-day free trial to start building your business.
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <PricingTableList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PricingPlansTwo;
