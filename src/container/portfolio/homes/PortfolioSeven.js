import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleFour";
import portfolios from '../../../data/portfolio/portfolio-two.json';
import PortfolioItem from "../../../components/portfolio/PortfolioItemThree";

const PortfolioSeven = () => {
    return (
        <div className="bk-portfolio-with-caption-area pt--130 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80 bg_color--1">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            title={"PORTFOLIOS"}
                            heading={"Collection of the greatest works."}
                            className="theme-color"
                            wrapperClass={'mb--80'}
                            center={true}
                        />
                    </Col>
                </Row>

                <Row className="mt--n30">
                    {
                        portfolios.map(portfolio => (
                            <Col sm={6} lg={4} key={portfolio.id}>
                                <PortfolioItem
                                    title={portfolio.title}
                                    thumb={require('../../../assets/img/portfolio/digital-agency/' + portfolio.thumb)}
                                    category={portfolio.category}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioSeven;
