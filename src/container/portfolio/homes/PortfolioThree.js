import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitleTwo from "../../../components/section-title/SectionTitleTwo";
import portfolios from '../../../data/portfolio/portfolio-two.json';
import PortfolioItemThree from "../../../components/portfolio/PortfolioItemThree";

const PortfolioThree = () => {
    return (
        <div className="bk-portfolio-with-caption-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5 poss_relative">
            <Container>
                <Row>
                    <Col xs={12}>
                       <SectionTitleTwo
                           className="mb--60"
                            title="PORTFOLIOS"
                            heading="Selected works."
                            center={true}
                       />
                    </Col>
                </Row>

                <Row className="mt--n30">
                    {portfolios.map(portfolio=>(
                            <Col sm={6} lg={4} key={portfolio.id}>
                                <PortfolioItemThree
                                    title={portfolio.title}
                                    thumb={require('../../../assets/img/portfolio/digital-agency/' + portfolio.thumb)}
                                    category={portfolio.category}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>

            <div className="vc_row-separator square bottom">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="90px" height="90px" viewBox="0 0 100 100"
                     preserveAspectRatio="none">
                    <rect x="33.3333%" y="0" width="66.6667" height="66.6667"/>
                    <rect x="0" y="66.6667%" width="33.3333%" height="33.3333%"/>
                </svg>
            </div>
        </div>
    );
};

export default PortfolioThree;
