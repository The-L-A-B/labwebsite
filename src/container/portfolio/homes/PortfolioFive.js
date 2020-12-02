import React, {useEffect} from 'react';
import PortfolioItem from "../../../components/portfolio/PortfolioItemFive";
import portfolios from '../../../data/portfolio/portfolio-three.json'
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";

const PortfolioFive = () => {

    useEffect(() => {
        const portfolioItems = document.querySelectorAll('.portfolio');
        const width2 = [1, 2, 5, 6];
        width2.map(item => {
            portfolioItems[item - 1].classList.add('grid-width-2');

            return 0;
        })

        const grid = document.querySelector('.masonry-list');
        imagesLoaded(grid, () => {
            new Masonry(grid);
        });

    }, []);

    return (
        <div className="brook-portfolio-area pb--100 pb_md--80 pb_sm--60 bg_color--1 bk-masonry-wrapper">
            <div className="portfolio-grid-metro3 masonry-list">
                <div className="resizer"/>
                {portfolios.slice(0,8).map(portfolio => (
                    <PortfolioItem
                        key={portfolio.id}
                        className="portfolio-25 wow move-up"
                        title={portfolio.title}
                        thumb={require('../../../assets/img/portfolio/grid/' + portfolio.thumb)}
                        category={portfolio.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioFive;
