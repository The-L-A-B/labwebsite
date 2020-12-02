import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SectionTitleTwo from "../../../components/section-title/SectionTitleTwo";
import portfolios from '../../../data/portfolio/portfolio-one.json'
import PortfolioItem from "../../../components/portfolio/PortfolioItemOne";

const PortfolioOne = () => {
    return (
        <div className="bk-portfolio-area">
            <div className="black-bg-wrapper bg_color--3 section-pt-xl pb--240">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <SectionTitleTwo
                                className={'white-text'}
                                center={true}
                                title={"PORTFOLIO"}
                                heading={"Create and make your dream."}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="portfolio-wrapper pl--150 pr--150 pl_lg--50 pr_lg--50 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
                <Row className={"row--0 space_dec--110"}>
                    <Col lg={6}>
                        <PortfolioItem
                            thumb={require('../../../assets/img/portfolio/portfolio-1/' + portfolios[0].thumb)}
                            title={[portfolios[0].title]}
                        />
                    </Col>

                    <Col lg={6}>
                        <Row className={"row--0"}>
                            <Col xs={12}>
                                <PortfolioItem
                                    thumb={require('../../../assets/img/portfolio/portfolio-1/' + portfolios[1].thumb)}
                                    title={[portfolios[1].title]}
                                />
                            </Col>

                            <Col md={6}>
                                <PortfolioItem
                                    thumb={require('../../../assets/img/portfolio/portfolio-1/' + portfolios[2].thumb)}
                                    title={[portfolios[2].title]}
                                />
                            </Col>

                            <Col md={6}>
                                <PortfolioItem
                                    thumb={require('../../../assets/img/portfolio/portfolio-1/' + portfolios[3].thumb)}
                                    title={[portfolios[3].title]}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PortfolioOne;
