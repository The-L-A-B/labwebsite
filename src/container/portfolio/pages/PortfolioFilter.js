import React, {useState, useEffect} from 'react';
import Isotope from "isotope-layout";
import imagesloaded from "imagesloaded";
import {Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "../../../components/portfolio/PortfolioItemThree";
import portfolios from "../../../data/portfolio/portfolio-three.json";

const PortfolioFilter = ({wide}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let mixCategories = [];
        let uniqueCategories = [];
        portfolios.map(project => {
            return mixCategories.push(project.category);
        });
        const commonCategories = [...new Set(mixCategories)];
        commonCategories.map(uniqueCate => {
            const filterableCate = mixCategories.filter(uniCateFilter => uniCateFilter === uniqueCate);
            return uniqueCategories.push(filterableCate);
        });
        setCategories(uniqueCategories);

        const wrapper = document.querySelector('.filter-wrapper');
        imagesloaded(wrapper, () => {

            let Iso = new Isotope(wrapper, {
                itemSelector: '.masonry-grid'
            });

            const filterItems = document.querySelectorAll('.masonry-button button');
            filterItems.forEach((filterItem, index) => {
                filterItem.addEventListener('click', () => {
                    const filterCate = filterItem.dataset.filter;
                    Iso.arrange({
                        filter: filterCate
                    })
                })
            })
        });
    }, []);

    return (
        <div className="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60">
            <Container fluid={!!wide} className={wide ? 'plr--30' : ''}>
                <Row>
                    <Col lg={12}>
                        <div className="masonry-button text-center mb--80">
                            <button data-filter="*">
                                <span className="filter-text">All</span>
                                <span className="filter-counter">{portfolios.length}</span>
                            </button>

                            {categories.map((category, index) => (
                                <button key={index} data-filter={`.${category[0].toLowerCase()}`}>
                                    <span className="filter-text">{category[0]}</span>
                                    <span className="filter-counter">{category.length}</span>
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row className="mt--n30 filter-wrapper">
                    {portfolios.map(portfolio => (
                        <Col
                            sm={6}
                            lg={4}
                            key={portfolio.id}
                            className={portfolio.category.toLowerCase() + ' masonry-grid'}
                        >
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

export default PortfolioFilter;
