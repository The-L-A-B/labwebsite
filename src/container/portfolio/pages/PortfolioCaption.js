import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "../../../components/portfolio/PortfolioItemThree";
import portfolios from "../../../data/portfolio/portfolio-three.json";

const PortfolioCaption = ({wide}) => {
    return (
        <div className="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60">
            <Container fluid={!!wide} className={wide ? 'plr--30' : ''}>
                <Row className="mt--n30">
                    {portfolios.map(portfolio => (
                        <Col sm={6} lg={4} key={portfolio.id}>
                            <PortfolioItem
                                title={portfolio.title}
                                thumb={require('../../../assets/img/portfolio/grid/' + portfolio.thumb)}
                                category={portfolio.category}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioCaption;
