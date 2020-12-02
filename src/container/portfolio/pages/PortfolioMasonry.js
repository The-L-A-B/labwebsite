import React, {useEffect} from 'react';
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import {Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "../../../components/portfolio/PortfolioItemOne";
import portfolios from "../../../data/portfolio/portfolio-three.json";


const PortfolioMasonry = ({wide, gutter}) => {
    useEffect(() => {
        const grid = document.querySelector('.masonry-list');
        imagesLoaded(grid, () => {
            new Masonry(grid);
        });
    }, []);

    return (
        <div className="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1 bk-masonry-wrapper">
            <Container fluid={!!wide} className={wide ? 'px-0' : ''}>
                <Row>
                    <Col lg={12}>
                        <div className="masonry-list portfolio-grid-metro4">
                            <div className="resizer"/>
                            {portfolios.map(portfolio => (
                                <div
                                    className={`grid-masonry-item portfolio-33-33 ${!gutter ? 'px-0 mb-0' : ''}`}
                                    key={portfolio.id}
                                >
                                    <PortfolioItem
                                        title={portfolio.title}
                                        thumb={require('../../../assets/img/portfolio/masonry/' + portfolio.thumb)}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioMasonry;
