import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import imagesloaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import Project from "../../../components/portfolio/PortfolioItemFour";
import projects from '../../../data/portfolio/projectArchitecture.json';

const PortfolioFour = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let mixCategories = [];
        let uniqueCategories = [];
        projects.map(project => {
            return mixCategories.push(project.category);
        });
        const commonCategories = [...new Set(mixCategories)];
        commonCategories.map(uniqueCate => {
            const filterableCate = mixCategories.filter(uniCateFilter => uniCateFilter === uniqueCate);
            return uniqueCategories.push(filterableCate);
        });

        setCategories(uniqueCategories);

        const masonryList = document.querySelector('.masonry-list');
        imagesloaded(masonryList, () => {
            const projectItems = masonryList.querySelectorAll('.masonry-grid');
            let start = 1;
            while (start <= projectItems.length) {
                projectItems[start].classList.add('grid-width-2');
                start += 4;
            }

            let Iso = new Isotope(masonryList, {
                itemSelector: '.masonry-grid'
            });

            const filterItems = document.querySelectorAll('.masonry-button-active button');
            filterItems.forEach((filterItem, index) => {
                filterItem.addEventListener('click', () => {
                    const filterCate = filterItem.dataset.filter;
                    Iso.arrange({
                        filter: filterCate
                    })
                })
            })
        })
    }, []);
    return (
        <div className="bk-portfolio-with-caption-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1 bk-masonry-wrapper">
            <Container>
                <Row className="align-items-center mb--15">
                    <Col lg={5} xl={6}>
                        <SectionTitle
                            heading="Latest Projects"
                        />
                    </Col>

                    <Col lg={7} xl={6}>
                        <div
                            className="masonry-button-active masonry-button--2 text-left text-lg-right mt_md--40 mt_sm--40">
                            <button data-filter="*">
                                <span className="filter-text">All</span>
                                <span className="filter-counter">{projects.length}</span>
                            </button>

                            {categories.map((category, indx) => (
                                <button key={indx} data-filter={`.${category[0].toLowerCase()}`}>
                                    <span className="filter-text">{category[0]}</span>
                                    <span className="filter-counter">{category.length}</span>
                                </button>
                            ))}
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div className="portfolio-grid-metro7 masonry-list">
                            {projects.map(project => (
                                <div key={project.id}
                                     className={`masonry-grid portfolio-25 ${project.category.toLowerCase()}`}>
                                    <Project
                                        title={project.title}
                                        thumb={require('../../../assets/img/portfolio/architecture/' + project.thumb)}
                                        category={project.category}
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

export default PortfolioFour;
