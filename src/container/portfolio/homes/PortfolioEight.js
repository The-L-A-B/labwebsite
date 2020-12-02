import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../components/section-title/SectionTitleFour";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import portfolios from "../../../data/portfolio/portfolio-three.json";
import PortfolioItem from "../../../components/portfolio/PortfolioItemSix";

const PortfolioEight = () => {

    useEffect(() => {
        const grid = document.querySelector('.masonry-list');
        imagesLoaded(grid, () => {
            new Masonry(grid, {
                itemSelector: '.portfolio-cation',
                columnWidth: '.masonry-sizer'
            });
        });
    })

    return (
        <div className="brook-portfolio-area pt--100">
            <Container fluid={true} className="plr--100 plr_sm--30 plr_md--50">
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            title={"PORTFOLIOS"}
                            heading={"Our Featured Works"}
                            className="text-white"
                            wrapperClass={'mb--70 white-text'}
                            center={true}
                        />
                    </Col>
                </Row>

                <Row className="masonry-list mt--n30">
                    <div className="col-1 masonry-sizer"/>
                    {portfolios.slice(0, 4).map(portfolio => {
                        return (
                            <PortfolioItem
                                key={portfolio.id}
                                title={portfolio.title}
                                thumb={require('../../../assets/img/portfolio/revolutionary/' + portfolio.thumb)}
                                category={portfolio.category}
                                className={`col-md-${(portfolio.id === 1 || portfolio.id === 4) ? 6 : 3}`}
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioEight;
